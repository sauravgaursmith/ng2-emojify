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
Here `imageUrl` is path to the image which is to be used as emoji. An emoji file may be `.jpg`, `.png` and
`.gif` file. `assets/gif/` is `default` path to used by this module. However you are free to give any full path 
to your emoji file.
Now if you `message` like this- `this is my custom emoji. :myemojiId:`. `:myemojiId:` will be conveted to your 
custom emoji image.

### License

[MIT](LICENSE)
