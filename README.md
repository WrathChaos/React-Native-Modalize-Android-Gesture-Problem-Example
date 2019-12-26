# Installation & USAGE

## For iOS:

* `npm i`
* `cd ios`

If you do not have cocoapods on your computer, run this command first: 
* `sudo gem install cocoapods`

Then: 
* `pod install && cd ..`
* `react-native run-ios`


## For Android:

Note: Android might not working right now, and there could be some design bugs. Just ignore them for now!
* `npm i`
* `react-native run-android`



# Error Fix: 

Do not miss the `React Native Gesture Handler`'s Android Installation !

```java
package com.modalizeandroiderrorexample;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "ModalizeAndroidErrorExample";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}

  ```