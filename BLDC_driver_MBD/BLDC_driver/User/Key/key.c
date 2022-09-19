#include "key.h"


//按键状态读取函数
uint8_t Get_Key1State(void)
{	
	return((uint8_t)(!HAL_GPIO_ReadPin(GPIOC,GPIO_PIN_13)));//返回1代表按下
}
	
uint8_t Get_Key2State(void)
{	
	return((uint8_t)(!HAL_GPIO_ReadPin(GPIOC,GPIO_PIN_0)));
}



