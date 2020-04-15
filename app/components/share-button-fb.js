import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

const FB_INTENT = 'https://www.facebook.com/sharer/sharer.php';

export default class ShareButtonFbComponent extends Component {
    @service router;

    get currentURL(){
        return new URL(this.router.currentURL, window.location.origin);
    }

    get shareURL(){
        let url = new URL(FB_INTENT);
        
        url.searchParams.set('url', this.currentURL);

        if(this.args.text){
            url.searchParams.set('text', this.args.text);
        }

        if(this.args.hashtags){
            url.searchParams.set('hashtags', this.args.hashtags);
        }

        if(this.args.via){
            url.searchParams.set('via', this.args.via);''
        }

        return url;
    }
}
