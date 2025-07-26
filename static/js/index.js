document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('clickMe');
  const message = document.getElementById('message');

  button.addEventListener('click', () => {
    message.textContent = '成功觸發！你剛剛點了按鈕！';
  });
});
