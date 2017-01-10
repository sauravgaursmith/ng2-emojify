Documentation is in process ... . please wait for its completion.(Today, by End Of The Day)

## This is an angular 2 module to support built-in and custom emoji in an angular 2 project.

### Prerequisite 
       * Angular-cli: 1.0.0-beta.18 or higher
       * NPM : 4.0.2 or higher
       * Node: v6.9.1 or higher

### Installation
```sh
npm install ng2-emojify  --save
```
### use

Developers can use this module in angular 2 projects for built-in or custom emoji or both.
Steps to use :
##### Add `Ng2EmojifyModule` to the module in which your `component` is declared like this.

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
#### To use built-in emoji

##### Add `emojify` pipe to `message` in your component `template`. Like it ...

```html
 <div [innerHTML]="message | emojify"></div>
 ```
 
 Here `message` is any message like - `I'm so happy today. :happy:`. In this message `:happy:`
 is an emoji identity. It will be converted to an image tag after passing through `emojify` pipe.
 
#### To use custom emoji

##### Add `CustomEmotion` service to your component `.ts` file. 

```js
import {CustomEmotion} from 'ng2-emojify';

...

constructor(private customEmotion: CustomEmotion) {
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
}
...
```





 ```js
import {CustomEmotion, Emotion} from 'ng2-emojify';
```

After installation, use the following steps
####1) Import  `CustomEmotion` and `Emotion` services to the component where you want to use ng2-emojify module like this. 

Here are two services namely- `CustomEmotion` and `Emotion`.

       * Use `CustomEmotion` service to add your custom emoji images or gif files
       * Use `Emotion` service to listen each click on emoji shown in emoji menu

```js

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

### License

[MIT](LICENSE)
