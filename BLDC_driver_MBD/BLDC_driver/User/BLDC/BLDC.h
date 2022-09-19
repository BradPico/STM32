#ifndef _BLDC_H_
#define _BLDC_H_

#include "main.h"
#include "tim.h"
#include "usart.h"
#include "gpio.h"


uint8_t Get_HallAState(void);
uint8_t Get_HallBState(void);
uint8_t Get_HallCState(void);

void Set_T1PWM(uint32_t PWMValue);
void Set_T3PWM(uint32_t PWMValue);
void Set_T5PWM(uint32_t PWMValue);
void Set_T2Status(uint8_t State);
void Set_T4Status(uint8_t State);
void Set_T6Status(uint8_t State);

void Set_StartStopMotor(uint8_t State);





#endif 
