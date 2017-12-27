# How To Install

To set up the environment dependencies ( node version 5++ )

```
$ npm install
```

To build app into minified bundle

```
$ npm run build
```

To run app server

```
$ npm run start:prod
```

Open this url ``http://localhost:8000``

# Feature Documentation

#### user can see the existing images from folder `images` to the images list

  The image list can be seen at the left pane immediately after app is already running

#### user can *upload image* to folder `images` and directly added to images list

  Upload image form can be found at the top of left pane. Browse .png or .jpeg formatted image file by clicking **Choose File** button. Uploaded image will be displayed at the left pane automatically after upload process is done.

#### user can *add image / text* from the menu to the canvas

  **Add Text**

  To add text from menu to canvas, simply type something in text input field and then click button **Add Text**. Text will automatically be displayed in canvas.

  **Add Image**

  To add image from menu to canvas, simply click on one of image list at left pane. Image will automatically be displayed on canvas.

#### user can *move and delete the image / text* inside the canvas

  **How to move image / text**

  To move image or text in canvas, simply click on text / image in canvas until we see blue border around image / text. Then we can move by dragging it.

  **How to delete image / text**

  To delete image / text, simply click on text / image in canvas until we see blue border around image / text. Then click button **Delete** at the right pane.

#### the created objects on canvas can be saved and repopulated on refresh browser

  **Save image / text to browser storage**

  To save image / text, simply click on text / image in canvas until we see blue border around image / text. Then click button **Save** at the right pane. Then try to refresh the browser, it should reload image / text we previously saved.

  **Clear saved image / text**

  Simply click on button **Clear Storage** at the right pane. Then try to refresh the browser, it should not reload the image / text anymore.

# UI Automated Test

## How to run

Prerequisite: Run the app by using below command

```
$ npm run start:prod
```

On another terminal / console / command line, run UI automated test by using below command

```
$ npm run test:ui
```

After automated test process is finished, a new server will be created at port 3000. New browser window will come up to show the automation test report.