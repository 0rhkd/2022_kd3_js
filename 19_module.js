function save( data ) {
 localStorage.setItem('data', data);
 sessionStorage.setItem('data', data);
 }

 export { save };              // 만들어진 코드를 내보낼때는 { } 사용
 