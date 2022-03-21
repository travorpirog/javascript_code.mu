"use strict";

// Для заполнения многомерных массивов необходимо использовать вложенные циклы
// Одни из которых должны создавать подмассивы, а другие их заполнять
// Задача 1
let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 5; j++) {
        arr[i].push(j + 1);
    }
}
console.log(arr);


// Задача 2
arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 4; j++) {
        arr[i].push('x');
    }
}
console.log(arr);

// Задача 3
arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 2; j++) {
        arr[i][j] = [];
        for (let k = 0; k < 5; k++) {
            arr[i][j].push(k + 1);
        }
    }
}
console.log(arr);



// Потенциальная проблема
// Важное не забывать в цикле прописывать arr[i] = []
// или arr[i][j] = []
// это создает кучу проблем, потому что вложенный цикл выдаст ошибку, если не задать
// начальный массив, в который мы будем вкладывать наши элементы или подмассивы

// Задача 4
arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

// Задача 5
arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}
console.log(arr);

// Задача 6
arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}
console.log(arr);

// Задача 7 
arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}
console.log(arr);

// Задача 8
arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j < 5; j++) {
		arr[i][j] = j + 1;
	}
}
console.log(arr);

// Задача 9
arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}
console.log(arr);

// Задача 10
arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}
console.log(arr);

// Задача 11
arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j < 5; j++) {
		arr[i][j] = j + 1;
	}
}

console.log(arr);

// Задача 12
arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}
console.log(arr);

// Задача 13
arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];	
	for (let j = 0; j < 5; j++) {
		arr[i][j] = j + 1;
	}
}
console.log(arr);

// Задача 14
arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];	
	for (let j = 0; j < 5; j++) {
		arr[i][j] = j + 1;
	}
}
console.log(arr);


// Задача 15
arr = [];
let k = 1;
for (let i = 0; i < 4; i++) {
    arr[i] = [];
    for (let j = 0; j < 2; j++) {
        arr[i].push(k);
        k++;
    }
}
console.log(arr);

// Задача 16
arr = [];
for (let i = 0, k = 1; i < 4; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++, k++) {
        arr[i].push(k * 2);
    }
}
console.log(arr);

// Задача 17
arr = [];
for (let i = 0, l = 1; i < 2; i++) {
    arr[i] = [];
    for (let j = 0; j < 2; j++) {
        arr[i][j] = [];
        for (let k = 1; k < 3; k++, l++) {
            arr[i][j].push(l);
        }
    }
}
console.log(arr);

// Задача 18
arr = [];
for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}
console.log(arr);

// Задача 19
arr = [];
k = 1;
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++, k++) {
		arr[i][j] = k;
	}
}
console.log(arr);

// Задача 20
