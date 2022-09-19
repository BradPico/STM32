/*
 * File: MotorControl.h
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

#ifndef RTW_HEADER_MotorControl_h_
#define RTW_HEADER_MotorControl_h_
#include <stddef.h>
#include <string.h>
#ifndef MotorControl_COMMON_INCLUDES_
# define MotorControl_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* MotorControl_COMMON_INCLUDES_ */

#include "MotorControl_types.h"

/* Child system includes */
#include "HallExtiTask.h"
#include "SystickTask.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* Block states (auto storage) for system '<Root>' */
typedef struct {
  real_T StartCount;                   /* '<S2>/Chart' */
  uint8_T Delay_DSTATE;                /* '<S4>/Delay' */
  uint8_T Delay_DSTATE_k;              /* '<S11>/Delay' */
  uint8_T Delay1_DSTATE;               /* '<S11>/Delay1' */
  uint8_T UnitDelay1_DSTATE;           /* '<S12>/Unit Delay1' */
  uint8_T UnitDelay_DSTATE;            /* '<S12>/Unit Delay' */
  uint8_T is_active_c3_MotorControl;   /* '<S2>/Chart' */
  uint8_T is_c3_MotorControl;          /* '<S2>/Chart' */
} DW_MotorControl_T;

/* Constant parameters (auto storage) */
typedef struct {
  /* Computed Parameter: turn_tableData
   * Referenced by: '<S8>/turn'
   */
  uint8_T turn_tableData[6];

  /* Pooled Parameter (Expression: [1 2 3 4 5 6])
   * Referenced by:
   *   '<S8>/turn'
   *   '<S8>/turn1'
   *   '<S8>/turn2'
   *   '<S8>/turn3'
   *   '<S8>/turn4'
   *   '<S8>/turn5'
   */
  uint8_T pooled6[6];

  /* Computed Parameter: turn1_tableData
   * Referenced by: '<S8>/turn1'
   */
  uint8_T turn1_tableData[6];

  /* Computed Parameter: turn2_tableData
   * Referenced by: '<S8>/turn2'
   */
  uint8_T turn2_tableData[6];

  /* Computed Parameter: turn3_tableData
   * Referenced by: '<S8>/turn3'
   */
  uint8_T turn3_tableData[6];

  /* Computed Parameter: turn4_tableData
   * Referenced by: '<S8>/turn4'
   */
  uint8_T turn4_tableData[6];

  /* Computed Parameter: turn5_tableData
   * Referenced by: '<S8>/turn5'
   */
  uint8_T turn5_tableData[6];

  /* Computed Parameter: turn_tableData_e
   * Referenced by: '<S4>/turn'
   */
  uint8_T turn_tableData_e[7];

  /* Pooled Parameter (Expression: [0 1 2 3 4 5 6])
   * Referenced by:
   *   '<S4>/turn'
   *   '<S4>/turn1'
   *   '<S4>/turn2'
   *   '<S4>/turn3'
   *   '<S4>/turn4'
   *   '<S4>/turn5'
   */
  uint8_T pooled8[7];

  /* Computed Parameter: turn1_tableData_p
   * Referenced by: '<S4>/turn1'
   */
  uint8_T turn1_tableData_p[7];

  /* Computed Parameter: turn2_tableData_e
   * Referenced by: '<S4>/turn2'
   */
  uint8_T turn2_tableData_e[7];

  /* Computed Parameter: turn3_tableData_g
   * Referenced by: '<S4>/turn3'
   */
  uint8_T turn3_tableData_g[7];

  /* Computed Parameter: turn4_tableData_j
   * Referenced by: '<S4>/turn4'
   */
  uint8_T turn4_tableData_j[7];

  /* Computed Parameter: turn5_tableData_l
   * Referenced by: '<S4>/turn5'
   */
  uint8_T turn5_tableData_l[7];
} ConstP_MotorControl_T;

/* Real-time Model Data Structure */
struct tag_RTM_MotorControl_T {
  const char_T *errorStatus;
};

/* Block states (auto storage) */
extern DW_MotorControl_T MotorControl_DW;

/* Constant parameters (auto storage) */
extern const ConstP_MotorControl_T MotorControl_ConstP;

/*
 * Exported Global Signals
 *
 * Note: Exported global signals are block signals with an exported global
 * storage class designation.  Code generation will declare the memory for
 * these signals and export their symbols.
 *
 */
extern uint8_T HallExtiFlag;           /* '<S4>/Data Type Conversion6' */
extern uint8_T Key1State;              /* '<S2>/Data Type Conversion' */
extern uint8_T StartMotorReq;          /* '<S11>/Data Type Conversion' */
extern uint8_T Key2State;              /* '<S2>/Data Type Conversion1' */
extern uint8_T StopMotorReq;           /* '<S12>/Data Type Conversion' */
extern uint8_T HallState;              /* '<S7>/Add' */
extern uint8_T TestState;              /* '<S2>/Data Type Conversion2' */
extern Enum_MotorState MotorState;     /* '<S2>/Chart' */

/*
 * Exported Global Parameters
 *
 * Note: Exported global parameters are tunable parameters with an exported
 * global storage class designation.  Code generation will declare the memory for
 * these parameters and exports their symbols.
 *
 */
extern uint32_T PWMValue;              /* Variable: PWMValue
                                        * Referenced by:
                                        *   '<S4>/Constant'
                                        *   '<S4>/Constant1'
                                        *   '<S4>/Constant2'
                                        *   '<S8>/Constant'
                                        *   '<S8>/Constant1'
                                        *   '<S8>/Constant2'
                                        */

/* Model entry point functions */
extern void MotorControl_initialize(void);
extern void MotorControl_step(void);
extern void MotorControl_terminate(void);

/* Real-time Model object */
extern RT_MODEL_MotorControl_T *const MotorControl_M;

/*-
 * These blocks were eliminated from the model due to optimizations:
 *
 * Block '<S8>/Display' : Unused code path elimination
 * Block '<S3>/Signal Conversion' : Eliminate redundant signal conversion block
 * Block '<S3>/Signal Conversion1' : Eliminate redundant signal conversion block
 * Block '<S4>/Data Type Conversion' : Eliminate redundant data type conversion
 * Block '<S4>/Data Type Conversion1' : Eliminate redundant data type conversion
 * Block '<S4>/Data Type Conversion2' : Eliminate redundant data type conversion
 * Block '<S7>/Signal Conversion' : Eliminate redundant signal conversion block
 * Block '<S7>/Signal Conversion1' : Eliminate redundant signal conversion block
 * Block '<S7>/Signal Conversion2' : Eliminate redundant signal conversion block
 * Block '<S8>/Data Type Conversion' : Eliminate redundant data type conversion
 * Block '<S8>/Data Type Conversion1' : Eliminate redundant data type conversion
 * Block '<S8>/Data Type Conversion2' : Eliminate redundant data type conversion
 */

/*-
 * The generated code includes comments that allow you to trace directly
 * back to the appropriate location in the model.  The basic format
 * is <system>/block_name, where system is the system number (uniquely
 * assigned by Simulink) and block_name is the name of the block.
 *
 * Use the MATLAB hilite_system command to trace the generated code back
 * to the model.  For example,
 *
 * hilite_system('<S3>')    - opens system 3
 * hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3
 *
 * Here is the system hierarchy for this model
 *
 * '<Root>' : 'MotorControl'
 * '<S1>'   : 'MotorControl/HallExtiTask'
 * '<S2>'   : 'MotorControl/SystickTask'
 * '<S3>'   : 'MotorControl/HallExtiTask/Subsystem'
 * '<S4>'   : 'MotorControl/HallExtiTask/Subsystem1'
 * '<S5>'   : 'MotorControl/HallExtiTask/Subsystem1/Compare To Constant1'
 * '<S6>'   : 'MotorControl/SystickTask/Chart'
 * '<S7>'   : 'MotorControl/SystickTask/Subsystem'
 * '<S8>'   : 'MotorControl/SystickTask/Subsystem1'
 * '<S9>'   : 'MotorControl/SystickTask/Subsystem2'
 * '<S10>'  : 'MotorControl/SystickTask/Subsystem3'
 * '<S11>'  : 'MotorControl/SystickTask/Subsystem2/Subsystem'
 * '<S12>'  : 'MotorControl/SystickTask/Subsystem2/Subsystem1'
 */
#endif                                 /* RTW_HEADER_MotorControl_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
