// Импортируем InputContainer из файла стилей
import { InputContainer } from './styled';

// Определяем типы для свойств компонента Input
type InputProps = {
	// Радиус скругления углов (опционально)
	radius?: number;

	// Ширина поля ввода, может быть строкой или числом (опционально)
	width?: string | number;

	// Высота поля ввода, может быть строкой или числом (опционально)
	height?: string | number;

	// Цвет границы (опционально)
	borderColor?: string | number;

	// Дополнительные свойства, переданные в компонент
	props?: any;

	// Имя поля ввода (опционально)
	name?: string | number | null;

	// Значение поля ввода
	value?: string | number;

	// Обработчик изменения значения
	onChange?: Function;

	// Тип поля ввода (например, "text", "password", "email")
	type?: string;

	// Обязательность заполнения (опционально)
	isRequired?: boolean;

	// Состояние "неактивности" (опционально)
	disabled?: boolean;

	// Шаблон для проверки ввода (опционально)
	pattern?: undefined;

	// Подсказка внутри поля ввода (опционально)
	placeholder?: string | number;
};

// Создаем компонент Input
const Input = ({
	// Устанавливаем значения по умолчанию для свойств
	name = null,
	value,
	onChange,
	type = 'text',
	radius = 7,
	width = 200,
	height = 40,
	borderColor = '3px solid #e0e0e6',
	isRequired,
	disabled,
	pattern,
	placeholder,
	...props
}: InputProps) => {
	return (
		<InputContainer
			// Передаем все дополнительные свойства
			{...props}
			// Задаем основные свойства для элемента ввода
			name={name}
			value={value}
			type={type}
			required={isRequired}
			disabled={disabled}
			pattern={pattern}
			placeholder={placeholder}
			onChange={onChange}
			// Стили передаются через объект styles
			styles={{
				radius, // Радиус скругления
				width, // Ширина
				height, // Высота
				borderColor, // Цвет границы
			}}
		/>
	);
};

// Экспортируем компонент Input для использования в других частях приложения
export default Input;
