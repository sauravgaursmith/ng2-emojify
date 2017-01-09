Please wait for the documentation. It is not completed yet. We will provide the same on Januaury 10, 2017 (EOD).
## This is an angular 2 module to support built-in and custom emoji in an angular 2 project.

### Installation

```sh
npm install ng2-emojify  --save
```
### use

After installation, use the following steps
####1) Import  `CustomEmotion` and `Emotion` services to the component where you want to use ng2-emojify module like this. 

Here are two services namely- `CustomEmotion` and `Emotion`.

       Use `CustomEmotion` service to add your custom emoji images or gif files
       Use `Emotion` service to listen each click on emoji shown in emoji menu

```js
import {CustomEmotion, Emotion} from 'ng2-emojify';
```
####2) Add following code to your `constructor` 
```js

constructor(private customEmotion: CustomEmotion, private emotion: Emotion) {
    /* Mandatory to keep in constructor */
    
    /* ***************************************************************************
     *  @ CustomEmotion
     * `imageId` - This is the id which will be used to convert into emoji.
     * `imageUrl` - This is the path to that image/gif which is to be used as emoji.
     * `title` - This is the `title` to be shown as `tooltip`.
     * *************************************************************************** */
     
    this.customEmotion.AddCustomEmotions([
      {
        imageId: 'myemojiId',
        imageUrl: 'assets/gif/my-emoji.jpg',
        title: 'My Emoji'
      }
    ]);

    /* ***************************************************************************
     *  @ Emotion
     * `imageInfo` - This the `string` in a formate `:<imageId>:` like `:smile:`. You can use
        it to append in a message like this - "Hi, I'm so happy to day :happy:". Here `:happy:`
        will be changed to emoji.
     * *************************************************************************** */

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
#### Please report issues at `https://github.com/sauravgaursmith/ng2-emojify/issues`

### License

[MIT](LICENSE)
