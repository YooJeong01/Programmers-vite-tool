/* enumerable type : 열거가능한 타입 */
/**
tsc를 실행해보면 실제로 js가 생성돼있고 값도 지정돼있다
진짜 진짜 진짜 찐 상수 쓰고싶으면 이걸 사용한다

*/

enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
}

const direction = {
    up:Direction.UP,
    down:Direction.DOWN,
    left:Direction.LEFT,
    right:Direction.RIGHT
}


enum End_point {
    USER = 'https://jsonplaceholder.typicode.com/users',
    POKEMON = 'https://pokeapi.co/api/v2/pokemon,'
}

End_point.USER

const END_POINT = {
    user:End_point.USER
}