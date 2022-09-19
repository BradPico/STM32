/*
 * File: MotorControl.c
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

#include "MotorControl.h"
#include "MotorControl_private.h"

/* Exported block signals */
uint8_T HallExtiFlag;                  /* '<S4>/Data Type Conversion6' */
uint8_T Key1State;                     /* '<S2>/Data Type Conversion' */
uint8_T StartMotorReq;                 /* '<S11>/Data Type Conversion' */
uint8_T Key2State;                     /* '<S2>/Data Type Conversion1' */
uint8_T StopMotorReq;                  /* '<S12>/Data Type Conversion' */
uint8_T HallState;                     /* '<S7>/Add' */
uint8_T TestState;                     /* '<S2>/Data Type Conversion2' */
Enum_MotorState MotorState;            /* '<S2>/Chart' */

/* Exported block parameters */
uint32_T PWMValue = 500U;             /* Variable: PWMValue
                                        * Referenced by:
                                        *   '<S4>/Constant'
                                        *   '<S4>/Constant1'
                                        *   '<S4>/Constant2'
                                        *   '<S8>/Constant'
                                        *   '<S8>/Constant1'
                                        *   '<S8>/Constant2'
                                        */

/* Block states (auto storage) */
DW_MotorControl_T MotorControl_DW;

/* Real-time model */
RT_MODEL_MotorControl_T MotorControl_M_;
RT_MODEL_MotorControl_T *const MotorControl_M = &MotorControl_M_;
uint32_T plook_u32u8_binckan(uint8_T u, const uint8_T bp[], uint32_T maxIndex)
{
  uint32_T bpIndex;

  /* Prelookup - Index only
     Index Search method: 'binary'
     Interpolation method: 'Use nearest'
     Extrapolation method: 'Clip'
     Use previous index: 'off'
     Use last breakpoint for index at or above upper limit: 'on'
     Remove protection against out-of-range input in generated code: 'off'
   */
  if (u <= bp[0U]) {
    bpIndex = 0U;
  } else if (u < bp[maxIndex]) {
    bpIndex = binsearch_u32u8(u, bp, maxIndex >> 1U, maxIndex);
    if ((uint8_T)((uint32_T)bp[bpIndex + 1U] - u) <= (uint8_T)((uint32_T)u -
         bp[bpIndex])) {
      bpIndex++;
    }
  } else {
    bpIndex = maxIndex;
  }

  return bpIndex;
}

uint32_T binsearch_u32u8(uint8_T u, const uint8_T bp[], uint32_T startIndex,
  uint32_T maxIndex)
{
  uint32_T bpIndex;
  uint32_T iRght;
  uint32_T bpIdx;

  /* Binary Search */
  bpIdx = startIndex;
  bpIndex = 0U;
  iRght = maxIndex;
  while (iRght - bpIndex > 1U) {
    if (u < bp[bpIdx]) {
      iRght = bpIdx;
    } else {
      bpIndex = bpIdx;
    }

    bpIdx = (iRght + bpIndex) >> 1U;
  }

  return bpIndex;
}

/* Model step function */
void MotorControl_step(void)
{
  /* S-Function (fcncallgen): '<Root>/Function-Call Generator' incorporates:
   *  SubSystem: '<Root>/SystickTask'
   */
  SystickTask();

  /* End of Outputs for S-Function (fcncallgen): '<Root>/Function-Call Generator' */

  /* S-Function (fcncallgen): '<Root>/Function-Call Generator1' incorporates:
   *  SubSystem: '<Root>/HallExtiTask'
   */
  HallExtiTask();

  /* End of Outputs for S-Function (fcncallgen): '<Root>/Function-Call Generator1' */
}

/* Model initialize function */
void MotorControl_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(MotorControl_M, (NULL));

  /* block I/O */

  /* exported global signals */
  HallExtiFlag = ((uint8_T)0U);
  Key1State = ((uint8_T)0U);
  StartMotorReq = ((uint8_T)0U);
  Key2State = ((uint8_T)0U);
  StopMotorReq = ((uint8_T)0U);
  HallState = ((uint8_T)0U);
  TestState = ((uint8_T)0U);
  MotorState = Enum_MotorState_Init;

  /* states (dwork) */
  (void) memset((void *)&MotorControl_DW, 0,
                sizeof(DW_MotorControl_T));

  /* SystemInitialize for S-Function (fcncallgen): '<Root>/Function-Call Generator' incorporates:
   *  SystemInitialize for SubSystem: '<Root>/SystickTask'
   */
  SystickTask_Init();

  /* End of SystemInitialize for S-Function (fcncallgen): '<Root>/Function-Call Generator' */
}

/* Model terminate function */
void MotorControl_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
