// Определяем тип для ответа. В ответе будет поле `status`, которое может принимать значения 201 (успех) или 422 (ошибка валидации).
type Response = {
	status: 201 | 422;
};

// Функция `postAuth` имитирует отправку данных для авторизации (логин/пароль).
// Она принимает два аргумента: `email` (строка) и `password` (строка).
// Возвращает Promise, который разрешается объектом типа `Response`.
export const postAuth = (email: string, password: string) => {
	return new Promise<Response>((resolve) => {
		// Проверяем, указаны ли email и пароль.
		if (email && password) {
			// Если данные указаны, сохраняем их в локальное хранилище браузера.
			localStorage.setItem('email', email);
			localStorage.setItem('password', password);

			// Создаем объект результата с кодом успешного выполнения (201).
			const result: Response = {
				status: 201, // 201 означает, что ресурс успешно создан.
			};

			// Возвращаем результат через resolve, завершая Promise.
			resolve(result);
		} else {
			// Если email или пароль не указаны, возвращаем код ошибки (422).
			const result: Response = {
				status: 422, // 422 означает, что данные введены неверно или отсутствуют.
			};

			// Завершаем Promise с этим результатом.
			resolve(result);
		}
	});
};
