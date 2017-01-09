## This is an angular 2 module to support built-in and custom emoji in an angular 2 project.

### Installation

```sh
npm install ng2-emojify  --save
```

### use

After installation, use the following steps
####1) Import  `CustomEmotion` and `Emotion` services to the component where you want to use ng2-emojify module like this. 
```js
import {CustomEmotion, Emotion} from 'ng2-emojify';
```
####2) Add following code to your `constructor` 
```js

constructor(private customEmotion: CustomEmotion, private emotion: Emotion) {
    /* Mandatory to keep in constructor */
    this.customEmotion.AddCustomEmotions([
      {
        imageId: 'myemojiId',
        imageUrl: 'assets/gif/my-emoji.jpg',
        title: 'My Emoji'
      }
    ]);

    this.emotion.CaptureEmojiClick().subscribe((imageInfo: string) => {
      // write your code here
    });
  }
  
```

####3) `Ng2EmojifyModule` to the module in which your component is declared like this.

```js
import {Ng2EmojifyModule} from 'ng2-emojify';

@NgModule({
 ...
  imports: [
    Ng2EmojifyModule  // like it.
  ],
 ...
})
export class AppModule {
}

```


## License

[MIT](LICENSE)
