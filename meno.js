const addMemoButton=document.querySelector('.add-memo');
function harit(){
    const newMemoInput=document.querySelector('.new-memo');
    const newMemo=document.createElement('li');
    newMemo.textContent=newMemoInput.value;
    const memoList=document.querySelector('.memo-list');
    memoList.append(newMemo);
    newMemoInput.value = ''; // 追加後に入力欄をクリアする
}

addMemoButton.addEventListener('click',harit);
