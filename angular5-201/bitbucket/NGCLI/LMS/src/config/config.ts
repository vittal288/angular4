import { environment } from '../environments/environment';

export class AppSettings {
    public CONFIG = {
        'REST_API': {
            'GOOLE_API_END_POINT': environment.googleAPIUrl,
            'LOCAL_JSON_ENG_POINY': environment.localJSONUrl,
            'API': 'api',
            'VERSION': 'v1',
            'SEARCHITEM': 'title-author-name.json',
            'BOOK-VOLUME': 'books/v1/volumes?q=',
            'ADD-TO-SHELF': 'mylibrary/bookshelves/0/addVolume?volumeId=',
            'BOOK-BY-ISBN': 'books/v1/volumes?q=isbn:',
            'REMOVE-FROM-SHELF': 'mylibrary/bookshelves/0/removeVolume?volumeId='
        },
        'MESSAGES': {
            'TOASTER': {
                'HTTP_ERROR': {
                    'UN_EXPECTED': 'Unexpected Error Occurred !!!'
                }
            }

        },
        'FIREBASE': {
            apiKey: 'AIzaSyDmjopNoSsPRyDasoqvE4g_m88BeVzw7hc',
            authDomain: 'anytime-library-ea43e.firebaseapp.com',
            databaseURL: 'https://anytime-library-ea43e.firebaseio.com',
            projectId: 'anytime-library-ea43e',
            storageBucket: '',
            messagingSenderId: '441111898629'
        },
        'GOOGLE_KYES': {
            'API_KEY': 'AIzaSyBRfRhjq-ErrYSoYRNjpoCdQ5Y28_kAbHE'
        }
    };

    exposeGoogleEndPoints(moduleName: string): string {
        return `${this.CONFIG.REST_API.GOOLE_API_END_POINT}/${this.CONFIG.REST_API[moduleName]}`;
    }

    exposeLocalJSONEndPoints(moduleName: string): string {
        return `${this.CONFIG.REST_API.LOCAL_JSON_ENG_POINY}/${this.CONFIG.REST_API[moduleName]}`;
    }

}

