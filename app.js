$(document).ready(function() {
    $('#todoForm').on('submit', function(event) {
        event.preventDefault(); // フォームの送信を防止

        var input = $('input[name="task"]');
        var task = input.val(); // 入力された値を取得

        if (task.trim() !== '') {
            // 新しい<li>要素を作成し、テキストと終了ボタンを追加
            var listItem = $('<li></li>').text(task);
            var deleteButton = $('<button></button>').text('タスク終了').addClass('delete-btn');
            listItem.append(deleteButton); // <li>要素にボタンを追加
            $('#todoList').append(listItem); // #todoListに追加
            input.val(''); // 入力フィールドをクリア

            // タスク終了ボタンのイベントハンドラ
            deleteButton.on('click', function() {
                $(this).parent().remove(); // ボタンの親の<li>要素をDOMから削除
            });
        }
    });
});
