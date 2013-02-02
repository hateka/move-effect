move-effect
======================  
This is effect script using with jquery. If you mouse over text area when element that is written article title will come down  from top position.

How to use
----------
	<div id="content1" class="wrap">
	<section>
	<hgroup>
	<h1>テスト</h1>
	</hgroup>
	<p>テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト</p>
	</section>
	</div>

	<div id="content2" class="wrap">
	<section>
	<hgroup>
	<h1>テスト</h1>
	</hgroup>
	<p>テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト</p>
	</section>
	</div>

    <script src="s.js"></script>
    <script>
    $(function(){
    var t = {content1:"タイトル1",content2:"タイトル2"};
    	$(".wrap").float({text:t},50);
    });
    </script>