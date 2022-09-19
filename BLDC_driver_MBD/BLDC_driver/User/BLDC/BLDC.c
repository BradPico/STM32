//############################################################
//STM32电机控制  
//修改日期:2022/9/19
//版本：V1.0
//############################################################

#include "main.h"
#include "BLDC.h"
#include "MotorControl.h"

//获取霍尔传感器状态
uint8_t Get_HallAState(void)
{
	static uint8_t hallA = 0;
	hallA = HAL_GPIO_ReadPin(GPIOB,GPIO_PIN_6);
	return HAL_GPIO_ReadPin(GPIOB,GPIO_PIN_6);
}

uint8_t Get_HallBState(void)
{
	static uint8_t hallB = 0;
	hallB = HAL_GPIO_ReadPin(GPIOB,GPIO_PIN_7);
	return HAL_GPIO_ReadPin(GPIOB,GPIO_PIN_7);
}

uint8_t Get_HallCState(void)
{
	static uint8_t hallC = 0;
	hallC = HAL_GPIO_ReadPin(GPIOB,GPIO_PIN_8);
	return HAL_GPIO_ReadPin(GPIOB,GPIO_PIN_8);         
}

//Mos管导通函数
void Set_T1PWM(uint32_t PWMValue)
{
	__HAL_TIM_SET_COMPARE(&htim1,TIM_CHANNEL_1,PWMValue);
}

void Set_T3PWM(uint32_t PWMValue)
{
	__HAL_TIM_SET_COMPARE(&htim1,TIM_CHANNEL_2,PWMValue);
}

void Set_T5PWM(uint32_t PWMValue)
{
	__HAL_TIM_SET_COMPARE(&htim1,TIM_CHANNEL_3,PWMValue);
}

void Set_T2Status(uint8_t State)
{
	HAL_GPIO_WritePin(GPIOB, GPIO_PIN_13,(GPIO_PinState)State);
}

void Set_T4Status(uint8_t State)
{
	HAL_GPIO_WritePin(GPIOB, GPIO_PIN_14,(GPIO_PinState)State);
}

void Set_T6Status(uint8_t State)
{
	HAL_GPIO_WritePin(GPIOB, GPIO_PIN_15,(GPIO_PinState)State);
}


//霍尔传感器中断回调函数
void HAL_GPIO_EXTI_Callback(uint16_t GPIO_Pin)
{
	__HAL_GPIO_EXTI_CLEAR_IT(GPIO_PIN_6); 
	__HAL_GPIO_EXTI_CLEAR_IT(GPIO_PIN_7); 
	__HAL_GPIO_EXTI_CLEAR_IT(GPIO_PIN_8); 
	
	HallExtiTask();
}


//电机启停函数，Set_StartStopMotor
void Set_StartStopMotor(uint8_t State)
{
	if(State == 0) //Stop Motor
	{
		TIM_PWM_state = 0;
		HAL_TIM_PWM_Stop(&htim1, TIM_CHANNEL_1);
		HAL_TIM_PWM_Stop(&htim1, TIM_CHANNEL_2);
		HAL_TIM_PWM_Stop(&htim1, TIM_CHANNEL_3);		
	}
	else
	{
		TIM_PWM_state = 1;
		HAL_TIM_PWM_Start(&htim1, TIM_CHANNEL_1);
		HAL_TIM_PWM_Start(&htim1, TIM_CHANNEL_2);
		HAL_TIM_PWM_Start(&htim1, TIM_CHANNEL_3);
	}
}

