## [An angular 2 module to support built-in and custom emoji]().

You can see [Live Demo application](https://ng2-emojify-example.firebaseapp.com), or [run on local system](https://github.com/sauravgaursmith/ng2-emojify-example/blob/master/README.md)


##### <b style="color: #2874A6;">About</b>
`ng2-emojify` module supports built-in and custom emoji. if you don't want to use custom emoji you can skip <b>To add custom emoji</b> section. This module also contains a built-in [emoji menu](MENU.md) support. Its optional to use. 

##### Sample message 

![alt snapshot](./message.png)

##### <b style="color: #2874A6;">Emoji List</b>

<p style="color: #2874A6;"><b>Note</b> This is the list of built-in emojis. But custom emoji(s) can be added.</p>

![alt snapshot](./emoji-table.png)

##### <b style="color: #2874A6;">Prerequisite</b> 
       * Angular-cli: 1.0.0-beta.18 or higher
       * NPM : 4.0.2 or higher
       * Node: v6.9.1 or higher

##### <b style="color: #2874A6;">Installation</b>
```sh
npm install ng2-emojify  --save
        or
yarn add ng2-emojify --save
```

##### <b style="color: #2874A6;">How to use ?</b>

##### 1. Put `emoji` folder into the `assets` folder
Goto the `node_modules/ng2-emojify/emoji` and Copy the `emoji` and paste in `assets`.

##### 2. Add `Ng2EmojifyModule` in the module file.

```js
import {Ng2EmojifyModule} from 'ng2-emojify';

@NgModule({
 ...
  imports: [
    Ng2EmojifyModule
  ],
 ...
})
export class AppModule {
}

```

##### 3. Add emoji style in `.css` or `.scss` file.
```css
<!-- This is just for example. It can be customized as per need.  -->
<!-- Just use class name ".emoji-image". -->

:host >>> .emogi-image {
  height: 60px;
  width: 60px;
  border-radius: 50%;
}

```


##### 4. Add `emojify` pipe to `message` in component's `template` file.

```html
 <div [innerHTML]="message | emojify"></div>
```
 
 Here, `message` is message string like - `I'm so happy today. :happy:`. In this string `:happy:`
 is an emoji identity. It will be converted to an image tag after passing through `emojify` pipe.


 
##### <b style="color: #2874A6;">To add custom emoji</b>
###### Add `CustomEmotion` service in component's `.ts` file. 

```js
import {CustomEmotion} from 'ng2-emojify';

...

constructor(private customEmotion: CustomEmotion) {
    /* Mandatory to keep in constructor */
    
    /* ***************************************************************************
     *  @ CustomEmotion
     * `emojiId` - This is the id which will be used to convert into emoji.
     * `emojiUrl`- This is the path to that image/gif which is to be used as emoji.
     * `title` - This is the `title` to be shown as `tooltip`.
     * ************************************************************************* */
     
    this.customEmotion.AddCustomEmotions([
      {
        emojiId: 'myemojiId',
        emojiUrl: 'assets/emoji/my-emoji.jpg',
        title: 'My Emoji'
      },

      {
        emojiId: 'myheart',
        emojiUrl: 'https://github.com/ng2-emojify/blob/master/emoji/heart.jpg',
        title: 'My Heart'
      }
    ]);
}
...
```
Here, `emojiUrl` is path to the image, which is to be used as emoji. An emoji file may be `.jpg`, `.png` and`.gif` file. `assets/emoji/` is `default` path used by this module.

<p style="color: #2874A6;"><b >IMPORTANT:  built-in emojiId</b> can be override. To override just use it as custom id. </p>

[EMOJI MENU (optional)](MENU.md)

### Thank you 

###### Report issues [here](https://github.com/sauravgaursmith/ng2-emojify/issues)
###### Feel free to sent your comments, queries and suggestions at [js.tech.feedback@gmail.com](mailto:js.tech.feedback@gmail.com)

### License

[MIT](LICENSE)
