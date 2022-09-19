/*
 * File: SystickTask.h
 *
 * Code generated for Simulink model 'MotorControl'.
 *
 * Model version                  : 1.9
 * Simulink Coder version         : 8.12 (R2017a) 16-Feb-2017
 * C/C++ source code generated on : Wed Sep 07 17:30:09 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#ifndef RTW_HEADER_SystickTask_h_
#define RTW_HEADER_SystickTask_h_
#include <math.h>
#ifndef MotorControl_COMMON_INCLUDES_
# define MotorControl_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* MotorControl_COMMON_INCLUDES_ */

#include "MotorControl_types.h"

extern void MotorControl_Subsystem1(uint8_T rtu_In1);
extern void SystickTask_Init(void);
extern void SystickTask(void);

#endif                                 /* RTW_HEADER_SystickTask_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
