#Angular.js Form Example 表單練習

![Angular.js Form Example 表單練習](https://goo.gl/ZrILZv)  

這個表單會展示常用表單元件、基本Directive和Controller的功能運作。由於網路上有很多大大的教學文章，因此在這裡只記錄一些我在學習/實作上遇到的重要觀念。 

<!-- more -->

- 單向資料綁定使用「ng-bind」、「ng-check」或「{{}}」（雙大括號），而雙向資料綁定則使用「ng-model」。
- 當使用ng-model時，Angular.js會自動建立關係鏈(chain)中必要的物件和Key值來實體化資料綁定的連結。因此不需要在程式碼中宣告user變數，直到使用者在username、password欄位輸入內容，就會自動建立user物件。並且，取用表單中的username與password不需要再宣告額外的變數，因為對於表單的呈現是直接模塑(modeling)成為controller裡的物件。因此，在取用表單內容值時可避免處理任何額外的工作。 範例如下：
	- HTML Snippet
	
			  <form ng-submit="ctrl.submit()">
			    <input type="text" ng-model="ctrl.user.username">
				<input type="password" ng-model="ctrl.user.password">
				<input type="submit" value="Submit">
			  </form>

	- JavaScript Snippet
	
			angular.module('notesApp', []).controller('MainCtrl', [function() {
				var self = this;
				self.submit = function() {
					console.log('User clicked submit with ', self.user);
				};
			}]);

- 巢狀表單(Nested Form)：`<form>`並不允許巢狀配置，為了解決這個問題，使用「`<ng-form>`」，[範例可參考 - Day27- 入門AngularJS筆記-AngularJS指令(23): ng-form](http://ithelp.ithome.com.tw/question/10140193)。
- 表單驗証與狀態：利用HTML5的validate tag和Angular.js的驗證器(validator)，若表單欄位填寫資料不合法時，禁用submit button。
	- 表單狀態，整理如下：
		- $invalid：若表單中有任一欄位驗證為false，則$invalid為true。
		- $valid：若表單全部欄位驗證皆合法，則$valid為true。
		- $pristine：若使用者沒有修改過欄位，則$pristine為true。
		- $dirty：使用者修改過欄位(含復原)，則$dirty為true。
		- $error： 報錯，見下面「錯誤訊息」範例。
	- Angular.js內建驗證器，整理如下：
		- required：欄位必填。
		- ng-required：有條件必填。
		- ng-minlength：最小長度。
		- ng-maxlength：最大長度。
		- ng-pattern：利用正規表示檢查欄位是否合法。
		- type="email"：輸入字串必須符合Email規則，例如：必須有「@」。
		- type="number"：只能為數字。
		- type="date"：Angular.js在版本1.3.0以上支援瀏覽器在此欄位出現datepicker，若不支援則為純文字字串。它綁定ng-model為一個date物件，格式為yyyy-mm-dd，例如：2014-01-01。
		- type="url" ：輸入字串必須符合網址規則，例如：必須有「http://」。
- 錯誤訊息：當欄位不合法時，顯示錯誤訊息。範例如下：當欄位沒有填寫時，會出現錯誤訊息告知此欄位必填。
		
	![Angular.js Form Example 表單練習 - 錯誤訊息](https://goo.gl/oCO5qd) 
		
	- HTML Snippet  

		    <input type="text" ng-model="ctrl.user.username" required>
		    <div class="errorMsg" ng-show="profileForm.username.$error.required">This is a required field.</div>
	
- 表單、欄位狀態與CSS類別的對照，整裡如下：
	- 表單狀態與CSS類別的對照
		- $invalid：ng-invalid。
		- $valid：ng-valid。
		- $pristine：ng-pristine。
		- $dirty：ng-dirty。
	- 欄位狀態與CSS類別的對照
		- $invalid：ng-invalid。
		- $valid：ng-valid。
		- $pristine：ng-pristine。
		- $dirty：ng-dirty。
		- required：ng-valid-required or ng-invalid-required。
		- min：ng-valid-min or ng-invalid-min。
		- max：ng-valid-max or ng-invalid-max。
		- minlength：ng-valid-minlength or ng-invalid-minlength。
		- maxlength：ng-valid-maxlength or ng-invalid-maxlength。
		- pattern：ng-valid-pattern or ng-invalid-pattern。
		- url：ng-valid-url or ng-invalid-url。
		- email：ng-valid-email or ng-invalid-email。
		- date：ng-valid-date or ng-invalid-date。
		- number：ng-valid-number or ng-invalid-number。

		在這裡就可以用這些對照後的class裝飾表單報錯。
		
		    input.ng-dirty.ng-invalid{
		    	background-color: red;
		    }
		    input.ng-dirty.ng-invalid-minlength{
		    	background-color: orange;
		    }
		    input.ng-dirty.ng-valid{
		    	background-color: white;
		    }
		
		若使用者變更欄位內容且不合法，則欄位背景顏色變成紅色。  

		![Angular.js Form Example 表單練習 - 若使用者變更欄位內容且不合法，則欄位背景顏色變成紅色。](https://goo.gl/jHwaA6)
	

		若欄位內容少於最小長度，則背景顏色變成橘色。  

		![Angular.js Form Example 表單練習 - 若欄位內容少於最小長度，則背景顏色變成橘色](https://goo.gl/IwvDGW)

		若欄位內容合法，則欄位背景顏色是白色。

##Demo
![Angular.js Form Example 表單練習](https://goo.gl/BWKCit)  

- [Demo](http://cythilya.github.io/angularjs-example/form/demo.html)
- [原始碼下載](https://github.com/cythilya/angularjs-example/releases)

---
####參考資料
- [AngularJS 建置與執行](http://www.books.com.tw/products/0010669125)，[PDF下載](http://it-ebooks.info/book/3890/)，[範例程式碼](https://github.com/shyamseshadri/angularjs-up-and-running)
- [Day27- 入門AngularJS筆記-AngularJS指令(23): ng-form](http://ithelp.ithome.com.tw/question/10140193)
- [AngularJS - TodoList](http://cythilya.blogspot.tw/2015/07/angularjs-todolist.html)
