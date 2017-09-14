package com.music;

import com.facebook.react.ReactActivity;
    
/** =============================================
Lo agrago por mi cuenta para trabajar con SKD Facebook 
============================================= */
import android.content.Intent;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Music";
    }

    /** =============================================
    Lo agrago por mi cuenta para trabajar con SKD Facebook 
    ============================================= */
    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
       super.onActivityResult(requestCode, resultCode, data);
       MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
    }    
}
