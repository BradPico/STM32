/*
 * File: HallExtiTask.c
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

#include "HallExtiTask.h"

/* Include model header file for global data */
#include "MotorControl.h"
#include "MotorControl_private.h"

/* Output and update for function-call system: '<Root>/HallExtiTask' */
void HallExtiTask(void)
{
  uint8_T rtb_turn5;
  uint8_T rtb_Add;

  /* Sum: '<S3>/Add' incorporates:
   *  ArithShift: '<S3>/Shift Arithmetic'
   *  ArithShift: '<S3>/Shift Arithmetic1'
   *  Inport: '<Root>/Get_HallAState'
   *  Inport: '<Root>/Get_HallBState'
   *  Inport: '<Root>/Get_HallCState'
   */
  rtb_Add = (uint8_T)(((uint32_T)(uint8_T)(Get_HallAState() << 2) + (uint8_T)
                       (Get_HallBState() << 1)) + Get_HallCState());

  /* MultiPortSwitch: '<S4>/Multiport Switch' incorporates:
   *  Constant: '<S4>/Constant3'
   */
  if (MotorState == Enum_MotorState_Run) {
    rtb_turn5 = rtb_Add;
  } else {
    rtb_turn5 = 0U;
  }

  /* End of MultiPortSwitch: '<S4>/Multiport Switch' */

  /* DataStoreWrite: '<S4>/Data Store Write' incorporates:
   *  Constant: '<S4>/Constant'
   *  DataTypeConversion: '<S4>/Data Type Conversion7'
   *  Lookup_n-D: '<S4>/turn'
   *  Product: '<S4>/Product3'
   */
  Set_T1PWM(MotorControl_ConstP.turn_tableData_e[plook_u32u8_binckan(rtb_turn5,
             MotorControl_ConstP.pooled8, 6U)] * PWMValue);

  /* DataStoreWrite: '<S4>/Data Store Write1' incorporates:
   *  Lookup_n-D: '<S4>/turn1'
   */
  Set_T2Status(MotorControl_ConstP.turn1_tableData_p[plook_u32u8_binckan
               (rtb_turn5, MotorControl_ConstP.pooled8, 6U)]);

  /* DataStoreWrite: '<S4>/Data Store Write2' incorporates:
   *  Constant: '<S4>/Constant1'
   *  DataTypeConversion: '<S4>/Data Type Conversion3'
   *  Lookup_n-D: '<S4>/turn2'
   *  Product: '<S4>/Product1'
   */
  Set_T3PWM(MotorControl_ConstP.turn2_tableData_e[plook_u32u8_binckan(rtb_turn5,
             MotorControl_ConstP.pooled8, 6U)] * PWMValue);

  /* DataStoreWrite: '<S4>/Data Store Write3' incorporates:
   *  Lookup_n-D: '<S4>/turn3'
   */
  Set_T4Status(MotorControl_ConstP.turn3_tableData_g[plook_u32u8_binckan
               (rtb_turn5, MotorControl_ConstP.pooled8, 6U)]);

  /* DataStoreWrite: '<S4>/Data Store Write4' incorporates:
   *  Constant: '<S4>/Constant2'
   *  DataTypeConversion: '<S4>/Data Type Conversion4'
   *  Lookup_n-D: '<S4>/turn4'
   *  Product: '<S4>/Product2'
   */
  Set_T5PWM(MotorControl_ConstP.turn4_tableData_j[plook_u32u8_binckan(rtb_turn5,
             MotorControl_ConstP.pooled8, 6U)] * PWMValue);

  /* DataStoreWrite: '<S4>/Data Store Write5' incorporates:
   *  Lookup_n-D: '<S4>/turn5'
   */
  Set_T6Status(MotorControl_ConstP.turn5_tableData_l[plook_u32u8_binckan
               (rtb_turn5, MotorControl_ConstP.pooled8, 6U)]);

  /* DataTypeConversion: '<S4>/Data Type Conversion6' incorporates:
   *  Constant: '<S5>/Constant'
   *  Delay: '<S4>/Delay'
   *  RelationalOperator: '<S5>/Compare'
   *  Sum: '<S4>/Add'
   */
  HallExtiFlag = (uint8_T)((uint8_T)(rtb_Add - MotorControl_DW.Delay_DSTATE) !=
    0);

  /* Update for Delay: '<S4>/Delay' */
  MotorControl_DW.Delay_DSTATE = rtb_Add;
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
