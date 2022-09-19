/*
 * File: SystickTask.c
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

#include "SystickTask.h"

/* Include model header file for global data */
#include "MotorControl.h"
#include "MotorControl_private.h"

/* Named constants for Chart: '<S2>/Chart' */
#define MotorControl_IN_Init           ((uint8_T)1U)
#define MotorControl_IN_NO_ACTIVE_CHILD ((uint8_T)0U)
#define MotorControl_IN_Run            ((uint8_T)2U)
#define MotorControl_IN_Start          ((uint8_T)3U)
#define MotorControl_IN_Stop           ((uint8_T)4U)

/* Output and update for function-call system: '<S2>/Subsystem1' */
void MotorControl_Subsystem1(uint8_T rtu_In1)
{
  /* DataStoreWrite: '<S8>/Data Store Write' incorporates:
   *  Constant: '<S8>/Constant3'
   */
  Set_StartStopMotor(1U);

  /* DataStoreWrite: '<S8>/Data Store Write1' incorporates:
   *  Constant: '<S8>/Constant'
   *  DataTypeConversion: '<S8>/Data Type Conversion6'
   *  Lookup_n-D: '<S8>/turn'
   *  Product: '<S8>/Product3'
   */
  Set_T1PWM(MotorControl_ConstP.turn_tableData[plook_u32u8_binckan(rtu_In1,
             MotorControl_ConstP.pooled6, 5U)] * PWMValue);

  /* DataStoreWrite: '<S8>/Data Store Write2' incorporates:
   *  Lookup_n-D: '<S8>/turn1'
   */
  Set_T2Status(MotorControl_ConstP.turn1_tableData[plook_u32u8_binckan(rtu_In1,
    MotorControl_ConstP.pooled6, 5U)]);

  /* DataStoreWrite: '<S8>/Data Store Write3' incorporates:
   *  Constant: '<S8>/Constant1'
   *  DataTypeConversion: '<S8>/Data Type Conversion3'
   *  Lookup_n-D: '<S8>/turn2'
   *  Product: '<S8>/Product1'
   */
  Set_T3PWM(MotorControl_ConstP.turn2_tableData[plook_u32u8_binckan(rtu_In1,
             MotorControl_ConstP.pooled6, 5U)] * PWMValue);

  /* DataStoreWrite: '<S8>/Data Store Write4' incorporates:
   *  Lookup_n-D: '<S8>/turn3'
   */
  Set_T4Status(MotorControl_ConstP.turn3_tableData[plook_u32u8_binckan(rtu_In1,
    MotorControl_ConstP.pooled6, 5U)]);

  /* DataStoreWrite: '<S8>/Data Store Write5' incorporates:
   *  Constant: '<S8>/Constant2'
   *  DataTypeConversion: '<S8>/Data Type Conversion4'
   *  Lookup_n-D: '<S8>/turn4'
   *  Product: '<S8>/Product2'
   */
  Set_T5PWM(MotorControl_ConstP.turn4_tableData[plook_u32u8_binckan(rtu_In1,
             MotorControl_ConstP.pooled6, 5U)] * PWMValue);

  /* DataStoreWrite: '<S8>/Data Store Write6' incorporates:
   *  Lookup_n-D: '<S8>/turn5'
   */
  Set_T6Status(MotorControl_ConstP.turn5_tableData[plook_u32u8_binckan(rtu_In1,
    MotorControl_ConstP.pooled6, 5U)]);
}

/* System initialize for function-call system: '<Root>/SystickTask' */
void SystickTask_Init(void)
{
  /* SystemInitialize for Chart: '<S2>/Chart' */
  MotorControl_DW.is_active_c3_MotorControl = 0U;
  MotorControl_DW.is_c3_MotorControl = MotorControl_IN_NO_ACTIVE_CHILD;
}

/* Output and update for function-call system: '<Root>/SystickTask' */
void SystickTask(void)
{
  uint8_T rtb_Delay;
  uint8_T rtb_UnitDelay1;
  int32_T rtb_TestState;

  /* DataTypeConversion: '<S2>/Data Type Conversion' incorporates:
   *  Inport: '<Root>/Get_Key1State'
   */
  Key1State = Get_Key1State();

  /* Delay: '<S11>/Delay' */
  rtb_Delay = MotorControl_DW.Delay_DSTATE_k;

  /* DataTypeConversion: '<S11>/Data Type Conversion' incorporates:
   *  Constant: '<S11>/Constant'
   *  Constant: '<S11>/Constant1'
   *  Constant: '<S11>/Constant2'
   *  Delay: '<S11>/Delay1'
   *  Logic: '<S11>/Logical Operator'
   *  RelationalOperator: '<S11>/Relational Operator'
   *  RelationalOperator: '<S11>/Relational Operator1'
   *  RelationalOperator: '<S11>/Relational Operator2'
   */
  StartMotorReq = (uint8_T)((Key1State == 1) && (rtb_Delay == 1) &&
    (MotorControl_DW.Delay1_DSTATE == 1));

  /* DataTypeConversion: '<S2>/Data Type Conversion1' incorporates:
   *  Inport: '<Root>/Get_Key2State'
   */
  Key2State = Get_Key2State();

  /* UnitDelay: '<S12>/Unit Delay1' */
  rtb_UnitDelay1 = MotorControl_DW.UnitDelay1_DSTATE;

  /* DataTypeConversion: '<S12>/Data Type Conversion' incorporates:
   *  Constant: '<S12>/Constant'
   *  Constant: '<S12>/Constant1'
   *  Constant: '<S12>/Constant2'
   *  Logic: '<S12>/Logical Operator'
   *  RelationalOperator: '<S12>/Relational Operator'
   *  RelationalOperator: '<S12>/Relational Operator1'
   *  RelationalOperator: '<S12>/Relational Operator2'
   *  UnitDelay: '<S12>/Unit Delay'
   */
  StopMotorReq = (uint8_T)((Key2State == 1) && (rtb_UnitDelay1 == 1) &&
    (MotorControl_DW.UnitDelay_DSTATE == 1));

  /* Sum: '<S7>/Add' incorporates:
   *  ArithShift: '<S7>/Shift Arithmetic'
   *  ArithShift: '<S7>/Shift Arithmetic1'
   *  Inport: '<Root>/Get_HallAState'
   *  Inport: '<Root>/Get_HallBState'
   *  Inport: '<Root>/Get_HallCState'
   */
  HallState = (uint8_T)(((uint32_T)(uint8_T)(Get_HallAState() << 2) + (uint8_T)
    (Get_HallBState() << 1)) + Get_HallCState());

  /* Chart: '<S2>/Chart' */
  /* Gateway: SystickTask/Chart */
  /* During: SystickTask/Chart */
  if (MotorControl_DW.is_active_c3_MotorControl == 0U) {
    /* Entry: SystickTask/Chart */
    MotorControl_DW.is_active_c3_MotorControl = 1U;

    /* Entry Internal: SystickTask/Chart */
    /* Transition: '<S6>:5' */
    MotorControl_DW.is_c3_MotorControl = MotorControl_IN_Init;

    /* Entry 'Init': '<S6>:1' */
    /* '<S6>:1:1' MotorState = Enum_MotorState.Init; */
    MotorState = Enum_MotorState_Init;

    /* '<S6>:1:1' TestState = 1; */
    rtb_TestState = 1;
  } else {
    switch (MotorControl_DW.is_c3_MotorControl) {
     case MotorControl_IN_Init:
      rtb_TestState = 1;
      MotorState = Enum_MotorState_Init;

      /* During 'Init': '<S6>:1' */
      /* '<S6>:6:1' sf_internal_predicateOutput = ... */
      /* '<S6>:6:1' StartMotorReq == 1; */
      if (StartMotorReq == 1) {
        /* Transition: '<S6>:6' */
        MotorControl_DW.is_c3_MotorControl = MotorControl_IN_Start;

        /* Entry 'Start': '<S6>:2' */
        /* '<S6>:2:1' MotorState = Enum_MotorState.Start; */
        MotorState = Enum_MotorState_Start;

        /* '<S6>:2:2' StartCount = 0; */
        MotorControl_DW.StartCount = 0.0;

        /* Outputs for Function Call SubSystem: '<S2>/Subsystem1' */

        /* '<S6>:2:3' StartMotorEvent; */
        /* Event: '<S6>:15' */
        MotorControl_Subsystem1(HallState);

        /* End of Outputs for SubSystem: '<S2>/Subsystem1' */

        /* '<S6>:2:3' TestState = 2; */
        rtb_TestState = 2;
      }
      break;

     case MotorControl_IN_Run:
      rtb_TestState = 3;
      MotorState = Enum_MotorState_Run;

      /* During 'Run': '<S6>:3' */
      /* '<S6>:8:1' sf_internal_predicateOutput = ... */
      /* '<S6>:8:1' StopMotorReq == 1; */
      if (StopMotorReq == 1) {
        /* Transition: '<S6>:8' */
        MotorControl_DW.is_c3_MotorControl = MotorControl_IN_Stop;

        /* Entry 'Stop': '<S6>:4' */
        /* '<S6>:4:1' MotorState = Enum_MotorState.Stop; */
        MotorState = Enum_MotorState_Stop;

        /* Outputs for Function Call SubSystem: '<S2>/Subsystem3' */
        /* DataStoreWrite: '<S10>/Data Store Write6' incorporates:
         *  Constant: '<S10>/Constant3'
         */
        /* '<S6>:4:1' StopMotorEvent; */
        /* Event: '<S6>:16' */
        Set_StartStopMotor(0U);

        /* End of Outputs for SubSystem: '<S2>/Subsystem3' */
        /* '<S6>:4:3' TestState = 4; */
        rtb_TestState = 4;
      }
      break;

     case MotorControl_IN_Start:
      rtb_TestState = 2;
      MotorState = Enum_MotorState_Start;

      /* During 'Start': '<S6>:2' */
      /* '<S6>:7:1' sf_internal_predicateOutput = ... */
      /* '<S6>:7:1' StartCount == 10; */
      if (MotorControl_DW.StartCount == 10.0) {
        /* Transition: '<S6>:7' */
        MotorControl_DW.is_c3_MotorControl = MotorControl_IN_Run;

        /* Entry 'Run': '<S6>:3' */
        /* '<S6>:3:1' MotorState = Enum_MotorState.Run; */
        MotorState = Enum_MotorState_Run;

        /* '<S6>:3:1' StartCount = 0; */
        MotorControl_DW.StartCount = 0.0;

        /* '<S6>:3:3' TestState = 3; */
        rtb_TestState = 3;
      } else {
        /* '<S6>:9:1' sf_internal_predicateOutput = ... */
        /* '<S6>:9:1' StopMotorReq == 1; */
        if (StopMotorReq == 1) {
          /* Transition: '<S6>:9' */
          MotorControl_DW.is_c3_MotorControl = MotorControl_IN_Stop;

          /* Entry 'Stop': '<S6>:4' */
          /* '<S6>:4:1' MotorState = Enum_MotorState.Stop; */
          MotorState = Enum_MotorState_Stop;

          /* Outputs for Function Call SubSystem: '<S2>/Subsystem3' */
          /* DataStoreWrite: '<S10>/Data Store Write6' incorporates:
           *  Constant: '<S10>/Constant3'
           */
          /* '<S6>:4:1' StopMotorEvent; */
          /* Event: '<S6>:16' */
          Set_StartStopMotor(0U);

          /* End of Outputs for SubSystem: '<S2>/Subsystem3' */
          /* '<S6>:4:3' TestState = 4; */
          rtb_TestState = 4;
        } else {
          /* '<S6>:2:3' StartCount = StartCount + 1; */
          MotorControl_DW.StartCount++;
        }
      }
      break;

     default:
      rtb_TestState = 4;
      MotorState = Enum_MotorState_Stop;

      /* During 'Stop': '<S6>:4' */
      /* '<S6>:10:1' sf_internal_predicateOutput = ... */
      /* '<S6>:10:1' StartMotorReq == 1; */
      if (StartMotorReq == 1) {
        /* Transition: '<S6>:10' */
        MotorControl_DW.is_c3_MotorControl = MotorControl_IN_Start;

        /* Entry 'Start': '<S6>:2' */
        /* '<S6>:2:1' MotorState = Enum_MotorState.Start; */
        MotorState = Enum_MotorState_Start;

        /* '<S6>:2:2' StartCount = 0; */
        MotorControl_DW.StartCount = 0.0;

        /* Outputs for Function Call SubSystem: '<S2>/Subsystem1' */

        /* '<S6>:2:3' StartMotorEvent; */
        /* Event: '<S6>:15' */
        MotorControl_Subsystem1(HallState);

        /* End of Outputs for SubSystem: '<S2>/Subsystem1' */

        /* '<S6>:2:3' TestState = 2; */
        rtb_TestState = 2;
      }
      break;
    }
  }

  /* End of Chart: '<S2>/Chart' */

  /* DataTypeConversion: '<S2>/Data Type Conversion2' */
  TestState = (uint8_T)(int32_T)fmod(rtb_TestState, 256.0);

  /* Update for Delay: '<S11>/Delay' */
  MotorControl_DW.Delay_DSTATE_k = Key1State;

  /* Update for Delay: '<S11>/Delay1' */
  MotorControl_DW.Delay1_DSTATE = rtb_Delay;

  /* Update for UnitDelay: '<S12>/Unit Delay1' */
  MotorControl_DW.UnitDelay1_DSTATE = Key2State;

  /* Update for UnitDelay: '<S12>/Unit Delay' */
  MotorControl_DW.UnitDelay_DSTATE = rtb_UnitDelay1;
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
