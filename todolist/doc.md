#AngularJS - TodoList
話說兩年前小小摸過[EmberJS](http://emberjs.com)、一年前用[React](https://facebook.github.io/react)寫過幾個plugin後，就沒再摸其他的Framework，甚至連AngulrJS這麼火紅的東西都沒好好認真玩過。先來寫個TodoList複習一下吧。

##功能
- 搜尋
- 新增
- 修改
- 刪除
- 改變狀態：做完 / 未做完
- 計數


##說明
###搜尋
在搜尋列中，我們利用 `ng-model="searchInput"` 綁定 `<input>`，然後將每個會被重複的todo item區塊標註filter而能依照searchInput的值做篩選。

####搜尋input
利用 `ng-model="searchInput"` 綁定 `<input>`。

	<input type="text" placeholder="Search for..." ng-model="searchInput">

####todo item區塊
`filter: searchInput` 表示依照searchInput的值做篩選。

	<tr ng-repeat="x in todos | filter: searchInput">
		...
	</tr>

###新增
我們可以在最後一行看到一個輸入框，輸入一些文字後按下「Add New Item」按鈕，即可新增新的項目。  

####HTML

	<tr>
		<td colspan="2">
			<input type="text" class="form-control" placeholder="type someting here..." ng-model="newItem" required>
		</td>
		<td>
			<button type="button" class="btn btn-default" ng-click="addItem(newItem)">Add New Item</button>
		</td>
	</tr>

來看上面這段程式碼，`ng-model="newItem"`綁定這個`<inpu>`，然後利用 `ng-click`監聽「Add New Item」按鈕的click事件，當按下這個按鈕時，執行addItem()這個function，同時將newItem的值傳入function。  

####JS

    $scope.addItem = function(newItem){
        var newInputItem = angular.copy(newItem),
            newItem = { id: $scope.counter+1, title: newInputItem, status: 0};
        if(newItem.title != undefined){
            $scope.todos.push(newItem);
            $scope.reset();
        }
    };

`angular.copy` 用途複製資料，我們取得字串後放到newItem這個物件的title欄位中。假設這個字串不為undefined，那就加入到todos這個陣列裡面，然後reset輸入框(意即還原成尚未打字前的樣子)。

###修改
###刪除
###改變狀態：做完 / 未做完
###計數

##Demo
來看一下完成品吧！  

![AngularJS - TodoList](demo/demo.gif)





