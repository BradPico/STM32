/*
 * File: MotorControl_types.h
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

#ifndef RTW_HEADER_MotorControl_types_h_
#define RTW_HEADER_MotorControl_types_h_
#include "rtwtypes.h"
#ifndef DEFINED_TYPEDEF_FOR_Enum_MotorState_
#define DEFINED_TYPEDEF_FOR_Enum_MotorState_

typedef uint8_T Enum_MotorState;

#define Enum_MotorState_Init           ((Enum_MotorState)0)
#define Enum_MotorState_Stop           ((Enum_MotorState)1)      /* Default value */
#define Enum_MotorState_Start          ((Enum_MotorState)2)
#define Enum_MotorState_Run            ((Enum_MotorState)3)
#endif

/* Forward declaration for rtModel */
typedef struct tag_RTM_MotorControl_T RT_MODEL_MotorControl_T;

#endif                                 /* RTW_HEADER_MotorControl_types_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
