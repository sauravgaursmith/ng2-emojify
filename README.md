## This is an angular 2 module to support built-in and custom emoji in an angular 2 project.

`ng2-emojify` recommends you to see [Demo application](https://github.com/sauravgaursmith/ng2-emojify-example/blob/master/README.md)

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

##### Put `emoji` folder into the `assets` folder
Goto the `node_modules/ng2-emojify/emoji` in your Angualr 2 Project and Copy/Cut the `emoji` folder from there and
paste this `emoji` folder to your `assets` folder inside your Angular 2 project.

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
##### Add the following css to your component `.css` file.
```css
:host >>> .emogi-image {
  height: 60px;
  width: 60px;
  border-radius: 50%;
}

```
You can customize this css according to your need.

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
     * `emojiId` - This is the id which will be used to convert into emoji.
     * `emojiUrl` - This is the path to that image/gif which is to be used as emoji.
     * `title` - This is the `title` to be shown as `tooltip`.
     * *************************************************************************** */
     
    this.customEmotion.AddCustomEmotions([
      {
        emojiId: 'myemojiId',
        emojiUrl: 'assets/emoji/my-emoji.jpg',
        title: 'My Emoji'
      }
    ]);
}
...
```
Here `emojiUrl` is path to the image which is to be used as emoji. An emoji file may be `.jpg`, `.png` and
`.gif` file. `assets/emoji/` is `default` path used by this module. However you are free to give any full path 
to your emoji file.
Now if you `message` like this- `this is my custom emoji. :myemojiId:`. `:myemojiId:` will be converted into your
custom emoji image.

###### `IMPORTANT: Please note if you use "emojiId" that is reserved for the built-in emoji. It will override the built-in`

### To use emoji menu 

There is a tradition to use menu to select an emoji to send as message. Like in `Facebook`, `Twitter`, `WatsApp`
and ` Hangout` and so on. `ng2-emojify` has a built-in support for the same. To use built-in menu support do this...

##### Add `Emotion` service to your component `.ts` file
```js
import {CustomEmotion, Emotion} from 'ng2-emojify';

...

constructor(private customEmotion: CustomEmotion, private emotion: Emotion) {
    /* Mandatory to keep in constructor */
    
    /* ***************************************************************************
     *  @ CustomEmotion
     * `emojiId` - This is the id which will be used to convert into emoji.
     * `emojiUrl` - This is the path to that image/gif which is to be used as emoji.
     * `title` - This is the `title` to be shown as `tooltip`.
     * *************************************************************************** */
     
    this.customEmotion.AddCustomEmotions([
      {
        emojiId: 'myemojiId',
        emojiUrl: 'assets/emoji/my-emoji.jpg',
        title: 'My Emoji'
      }
    ]);


  /* ********************************************************************************
     *  @ Emotion
     * `emojiIdentity` - This is the simple string like `:happy:` or `:smile:` of the
        emoji that has been clicked in the emoji menu.
     * *************************************************************************** */
     
     this.emotion.CaptureEmojiClick().subscribe((emojiIdentity: string) => {
      // write your logic here
    });
}
...
```
You can write your own logic in `CaptureEmojiClick()` to add this `emojiIdentity` to your message string to send directly it in message like in `Facebook` when emoji is clicked by user. You can write your code to add emoji to your `input` or `textarea` like `Skype` and then can send in message all at once.

##### Add `[emotion-menu]` directive and `<emoji-menu></emoji-menu>` component to your component `.template`.
```html
 <div [innerHTML]="message | emojify"></div>
 <button [emotion-menu] id="btn">Menu</button>
 <emoji-menu></emoji-menu>
 ```
Here, when `button` is clicked it will display emoji menu with built-in and custom emojis. when an emoji is clicked, 
its id `(emojiIdentity)` can be listen in `CaptureEmojiClick()` in your component `constructor`. When you click outside
`emoji menu`, it gets closed.

###### ` IMPORTANT: Please give a unique id to the HTML element on which you have added the [emotion-menu] directive`

##### To customize emoji-menu css
There are three main HTML tags that constitutes the emoji-menu, two of them are `<div>` and one `<img>`. You can write your
custom css for all of these. `There is one main div that contains whole menu. second div contains the image and third is itself image`. To write css for all of these, Youcan write as...

#######make a seprate file with extension `.ts` to contain css
You can name it whatever you like. such as `custom-emoji-menu-css.ts`. It may be surprising to you but soon it will be clear to you later. Now write your css like this in your `.ts` file.
```js
/* ***********************************************
   * custom css declarations
   * *********************************************** */
   
 export const  emotionCss = {
    customEmotionMenuCss: {
    position: 'fixed',
    'border-radius': '10px 10px 10px 0px',
    width: 520 + 'px',
    height: 200 + 'px',
    'background-color': 'lightblue',
    border: '1px solid blue',
    'z-index': 1,
    'overflow-x': 'hidden'
  },
  customEmotionContainerCss: {
    float: 'left',
    width: 80 + 'px',
    height: 80 + 'px',
    margin: '15px'
  },
  
  customEmotionImageCss: {
    width: '100%',
    height: '100%',
    margin: '0px',
    'border-radius': '50%'
  }
 };
```
Here `customEmotionMenuCss` is css for main `div` that holds the emojis, `customEmotionContainerCss` is css for the second `div` inside the main `div` and `customEmotionImageCss` is css for the emoji image (`img` tag) it self.

Now, you have written your custom css. import it in the main component `.ts` file and use like this...

```js
import {CustomEmotion, Emotion} from 'ng2-emojify';
import {emotionCss} from './custom-emoji-menu-css.ts';

...

customEmotionCss: any;

constructor(private customEmotion: CustomEmotion, private emotion: Emotion) {

    /* initialize the customEmotionCss value */
     this.customEmotionCss = emotionCss;      // <---------------- like it.

    /* ***************************************************************************
     *  @ CustomEmotion
     * `emojiId` - This is the id which will be used to convert into emoji.
     * `emojiUrl` - This is the path to that image/gif which is to be used as emoji.
     * `title` - This is the `title` to be shown as `tooltip`.
     * *************************************************************************** */
     
    this.customEmotion.AddCustomEmotions([
      {
        emojiId: 'myemojiId',
        emojiUrl: 'assets/emoji/my-emoji.jpg',
        title: 'My Emoji'
      }
    ]);


  /* ********************************************************************************
     *  @ Emotion
     * `emojiIdentity` - This is the simple string like `:happy:` or `:smile:` of the
        emoji that has been clicked in the emoji menu.
     * *************************************************************************** */
     
     this.emotion.CaptureEmojiClick().subscribe((emojiIdentity: string) => {
      // write your logic here
    });
}
...
```

Now you have to provide css to the `[emotion-menu]` directive in your `template` file as here...
```html
 <div [innerHTML]="message | emojify"></div>
 <button [emotion-menu] ="customEmotionCss" id="btn">Menu</button>  
 <emoji-menu></emoji-menu>
 ```
### Congrates 
This is all about this module.

###### Please report issues at https://github.com/sauravgaursmith/ng2-emojify/issues
###### Please sent your comments, queries and suggestions for the future releases at `saurav.gaur011@gmail.com`

### License

[MIT](LICENSE)
