import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import {AppError} from '../common/app-error';
import {NotFoundError} from '../common/not-found-error';
import {BadInputError} from '../common/bad-input-error';


@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {
  public posts: any;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getAll().
      subscribe(response => this.posts = response)
  }

  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    //updating optimistically
    this.posts.splice(0, 0, post);

    input.value = ''

    this.postService.create(JSON.stringify(post)).subscribe((response) => {
      post['id'] = JSON.stringify(response['id']);
      
    },(error:AppError)=>{
      //roll back optimistic update in error block
      this.posts.splice(0,1);
      if(error instanceof BadInputError){//bad request 400 error 
        //alert('BAD REQ');
        //this.form.setErrors(err.OrginalError)
      }else throw error;  //AppErroHandler will handle this 
    })
  }

  updatedPost(post) {
    this.postService.update(post.id, JSON.stringify({ isRead: true })).
      subscribe(response => console.log(response))
  };

  deletePost(post) {
    //deleting optimistically 
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.postService.delete(post.id).subscribe(() => {
     
    },(error:AppError)=>{  
      //rollback optimistic delete     
      this.posts.splice(index,0,post)

      if(error instanceof NotFoundError) //404 
        alert('this post has been already deleted')
      else throw error;
    })
  }

}
