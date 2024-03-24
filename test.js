var 배열 = [6, 3, 40, 7, 2]

// 아 정렬하고 싶다 ==> sort
배열.sort()     // 정렬 완료! (문자열 기준으로...)
console.log(배열)

// 숫자 정렬하고 싶으면 a(앞에꺼), b(뒤에꺼) 비교해서
// 음수나오면 (앞에꺼가 작으면) a, b 로 정렬
// 양수나오면 (뒤에꺼가 작으면) b, a 로 정렬
배열.sort((a,b)=>a-b)
console.log(배열)

// sort로 정렬을 하고 싶다
// 리턴값이 - 면 a를 앞에두고
// 리턴값이 + 면 b를 앞에둔다

// 문자열 정렬 (알파벳순)
배열 = ['qwer34','qwer12',  'zxcv', 'pl']
배열.sort()         // 배열을 정렬
console.log(배열)

배열 = ['한글34','한글12', '가나다라마', '안녕하세요']
배열.sort()
console.log(배열)

객체배열 = [
  {'id':0, 'name':'홍길동'},
  {'id':2, 'name':'유관순'},
  {'id':1, 'name':'김유신'},
  {'id':3, 'name':'이순신'},
  {'id':4, 'name':'윤동주'},
]

// 객체들 정렬
객체배열.sort((a,b)=>{
  // 해당 지역의 언어순으로 정렬 localeCompare
  return a['name'].localeCompare(b['name'])
})
console.log(객체배열)

//// filter : 내가 원하는 값만 남겨라 (return값에 해당하는 요소만 남김)
// 아이디가 2이상인 객체만 남기자
var 새정렬 = 객체배열.filter((e)=>{
  return e['id'] >= 2
})

console.log(새정렬)

//// map : 일괄변경 (배열 안에 들어있는 모든 요소를 return값으로 변경)
var 달러 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var 원화 = 달러.map(e=>{
  return parseFloat((e * 1344.60).toFixed(2))
})

console.log(달러)
console.log(원화)

//// forEach : 배열의 각 요소를 분리해주는 배열전용 반복문
// 길이계산을 자동으로 for(let i=0; i<달러.length;i++){}
달러.forEach((e)=>{
  console.log(e)      // 안에 있는 요소들을 하나씩 돌아가면서 반복문 사용
})

