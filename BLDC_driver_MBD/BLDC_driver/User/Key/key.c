#include "key.h"


//����״̬��ȡ����
uint8_t Get_Key1State(void)
{	
	return((uint8_t)(!HAL_GPIO_ReadPin(GPIOC,GPIO_PIN_13)));//����1������
}
	
uint8_t Get_Key2State(void)
{	
	return((uint8_t)(!HAL_GPIO_ReadPin(GPIOC,GPIO_PIN_0)));
}



