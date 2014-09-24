/*
 * # runstant
 * さぁ, 一緒にゲームプログラミングを始めよう!!
 * ってことで tmlib.js の公式エディタツール runstant です(tmlibのステマ)
 */

// main
tm.main(function() {
    var app = tm.display.CanvasApp("#world");
    app.resize(640, 960);
    app.fitWindow();
    
    // スターを生成
    var star = tm.display.StarShape().addChildTo(app.currentScene);
    // 真ん中にセット    
    star.setPosition(320, 480);
    // クルクル回す
    star.tweener.by({ rotation:360 }, 1000).setLoop(true);
    
    // ラベル
    var label = tm.display.Label("touch screen!").addChildTo(app.currentScene);
    label.setPosition(320, 800);
    
    // 更新処理
    app.currentScene.update = function(app) {
        var pointing = app.pointing;
        if (pointing.getPointing()) {
            star.x += (pointing.x-star.x)*0.1;
            star.y += (pointing.y-star.y)*0.1;
        }
    };
    
    // 実行
    app.run();
});

