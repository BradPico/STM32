/* USER CODE BEGIN Header */
/**
  ******************************************************************************
  * @file           : main.c
  * @brief          : Main program body
  ******************************************************************************
  * @attention
  *
  * <h2><center>&copy; Copyright (c) 2022 STMicroelectronics.
  * All rights reserved.</center></h2>
  *
  * This software component is licensed by ST under BSD 3-Clause license,
  * the "License"; You may not use this file except in compliance with the
  * License. You may obtain a copy of the License at:
  *                        opensource.org/licenses/BSD-3-Clause
  *
  ******************************************************************************
  */
/* USER CODE END Header */
/* Includes ------------------------------------------------------------------*/
#include "main.h"
#include "tim.h"
#include "usart.h"
#include "gpio.h"

/* Private includes ----------------------------------------------------------*/
/* USER CODE BEGIN Includes */
//��ȡ����������״̬
/*
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
*/
/* USER CODE END Includes */

/* Private typedef -----------------------------------------------------------*/
/* USER CODE BEGIN PTD */

//Mos�ܵ�ͨ����
/*
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
*/
/* USER CODE END PTD */

/* Private define ------------------------------------------------------------*/
/* USER CODE BEGIN PD */
/* USER CODE END PD */

/* Private macro -------------------------------------------------------------*/
/* USER CODE BEGIN PM */
//�����������жϻص�����
/*
void HAL_GPIO_EXTI_Callback(uint16_t GPIO_Pin)
{
	__HAL_GPIO_EXTI_CLEAR_IT(GPIO_PIN_6); 
	__HAL_GPIO_EXTI_CLEAR_IT(GPIO_PIN_7); 
	__HAL_GPIO_EXTI_CLEAR_IT(GPIO_PIN_8); 
	
	HallExtiTask();
}
*/
/* USER CODE END PM */

/* Private variables ---------------------------------------------------------*/

/* USER CODE BEGIN PV */

//����״̬��ȡ����
/*
uint8_t Get_Key1State(void)
{	
	return((uint8_t)(!HAL_GPIO_ReadPin(GPIOC,GPIO_PIN_13)));//����1������
}
	
uint8_t Get_Key2State(void)
{	
	return((uint8_t)(!HAL_GPIO_ReadPin(GPIOC,GPIO_PIN_0)));
}
*/
/* USER CODE END PV */

/* Private function prototypes -----------------------------------------------*/
void SystemClock_Config(void);
/* USER CODE BEGIN PFP */

//�����ͣ������Set_StartStopMotor
/*void Set_StartStopMotor(uint8_t State)
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
*/

/* USER CODE END PFP */

/* Private user code ---------------------------------------------------------*/
/* USER CODE BEGIN 0 */

int fputc(int ch, FILE *f)
{
	HAL_UART_Transmit(&huart3,(uint8_t *)&ch, 1, 0xFFFF);
	return (ch);
}

uint8_t MotorConState[20] = {0xA5,0xDA,0x03,0x04,0x05,0x06,0x07,0x08};
uint8_t TIM_PWM_state = 0;
/* USER CODE END 0 */

/**
  * @brief  The application entry point.
  * @retval int
  */
int main(void)
{
  /* USER CODE BEGIN 1 */
	
  /* USER CODE END 1 */

  /* MCU Configuration--------------------------------------------------------*/

  /* Reset of all peripherals, Initializes the Flash interface and the Systick. */
  HAL_Init();

  /* USER CODE BEGIN Init */
	
  /* USER CODE END Init */

  /* Configure the system clock */
  SystemClock_Config();

  /* USER CODE BEGIN SysInit */
	HAL_SYSTICK_Config(SystemCoreClock / 1000);
  /* USER CODE END SysInit */

  /* Initialize all configured peripherals */
  MX_GPIO_Init();
  MX_TIM1_Init();
  MX_USART3_UART_Init();
  /* USER CODE BEGIN 2 */
	MotorControl_initialize();
  /* USER CODE END 2 */

  /* Infinite loop */
  /* USER CODE BEGIN WHILE */
  while (1)
  {
    /* USER CODE END WHILE */

    /* USER CODE BEGIN 3 */
		//printf("return value is 123 \n");
		MotorConState[2] = Key1State;
		MotorConState[3] = Key2State;
		MotorConState[4] = StartMotorReq;
		MotorConState[5] = StopMotorReq;
		MotorConState[6] = TestState;
		MotorConState[7] = TIM_PWM_state;
		
		HAL_UART_Transmit_IT(&huart3,(uint8_t *)MotorConState,sizeof(MotorConState));
		HAL_Delay(10);
		
  }
  /* USER CODE END 3 */
}

/**
  * @brief System Clock Configuration
  * @retval None
  */
void SystemClock_Config(void)
{
  RCC_OscInitTypeDef RCC_OscInitStruct = {0};
  RCC_ClkInitTypeDef RCC_ClkInitStruct = {0};

  /** Configure the main internal regulator output voltage
  */
  __HAL_RCC_PWR_CLK_ENABLE();
  __HAL_PWR_VOLTAGESCALING_CONFIG(PWR_REGULATOR_VOLTAGE_SCALE1);
  /** Initializes the RCC Oscillators according to the specified parameters
  * in the RCC_OscInitTypeDef structure.
  */
  RCC_OscInitStruct.OscillatorType = RCC_OSCILLATORTYPE_HSE;
  RCC_OscInitStruct.HSEState = RCC_HSE_ON;
  RCC_OscInitStruct.PLL.PLLState = RCC_PLL_ON;
  RCC_OscInitStruct.PLL.PLLSource = RCC_PLLSOURCE_HSE;
  RCC_OscInitStruct.PLL.PLLM = 4;
  RCC_OscInitStruct.PLL.PLLN = 168;
  RCC_OscInitStruct.PLL.PLLP = RCC_PLLP_DIV2;
  RCC_OscInitStruct.PLL.PLLQ = 4;
  if (HAL_RCC_OscConfig(&RCC_OscInitStruct) != HAL_OK)
  {
    Error_Handler();
  }
  /** Initializes the CPU, AHB and APB buses clocks
  */
  RCC_ClkInitStruct.ClockType = RCC_CLOCKTYPE_HCLK|RCC_CLOCKTYPE_SYSCLK
                              |RCC_CLOCKTYPE_PCLK1|RCC_CLOCKTYPE_PCLK2;
  RCC_ClkInitStruct.SYSCLKSource = RCC_SYSCLKSOURCE_PLLCLK;
  RCC_ClkInitStruct.AHBCLKDivider = RCC_SYSCLK_DIV1;
  RCC_ClkInitStruct.APB1CLKDivider = RCC_HCLK_DIV8;
  RCC_ClkInitStruct.APB2CLKDivider = RCC_HCLK_DIV4;

  if (HAL_RCC_ClockConfig(&RCC_ClkInitStruct, FLASH_LATENCY_5) != HAL_OK)
  {
    Error_Handler();
  }
}

/* USER CODE BEGIN 4 */

/* USER CODE END 4 */

/**
  * @brief  This function is executed in case of error occurrence.
  * @retval None
  */
void Error_Handler(void)
{
  /* USER CODE BEGIN Error_Handler_Debug */
  /* User can add his own implementation to report the HAL error return state */
  __disable_irq();
  while (1)
  {
  }
  /* USER CODE END Error_Handler_Debug */
}

#ifdef  USE_FULL_ASSERT
/**
  * @brief  Reports the name of the source file and the source line number
  *         where the assert_param error has occurred.
  * @param  file: pointer to the source file name
  * @param  line: assert_param error line source number
  * @retval None
  */
void assert_failed(uint8_t *file, uint32_t line)
{
  /* USER CODE BEGIN 6 */
  /* User can add his own implementation to report the file name and line number,
     ex: printf("Wrong parameters value: file %s on line %d\r\n", file, line) */
  /* USER CODE END 6 */
}
#endif /* USE_FULL_ASSERT */

/************************ (C) COPYRIGHT STMicroelectronics *****END OF FILE****/
