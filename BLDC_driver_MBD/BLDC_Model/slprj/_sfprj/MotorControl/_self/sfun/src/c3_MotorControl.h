#ifndef __c3_MotorControl_h__
#define __c3_MotorControl_h__

/* Include files */
#include "sf_runtime/sfc_sf.h"
#include "sf_runtime/sfc_mex.h"
#include "rtwtypes.h"
#include "multiword_types.h"

/* Type Definitions */
#ifndef typedef_c3_Enum_MotorState
#define typedef_c3_Enum_MotorState

typedef uint8_T c3_Enum_MotorState;

#endif                                 /*typedef_c3_Enum_MotorState*/

#ifndef Enum_MotorState_constants
#define Enum_MotorState_constants

/* enum Enum_MotorState */
#define c3_Enum_MotorState_Init        ((c3_Enum_MotorState)0U)
#define c3_Enum_MotorState_Stop        ((c3_Enum_MotorState)1U)
#define c3_Enum_MotorState_Start       ((c3_Enum_MotorState)2U)
#define c3_Enum_MotorState_Run         ((c3_Enum_MotorState)3U)
#endif                                 /*Enum_MotorState_constants*/

#ifndef typedef_SFc3_MotorControlInstanceStruct
#define typedef_SFc3_MotorControlInstanceStruct

typedef struct {
  SimStruct *S;
  ChartInfoStruct chartInfo;
  uint32_T chartNumber;
  uint32_T instanceNumber;
  int32_T c3_sfEvent;
  uint8_T c3_tp_Init;
  uint8_T c3_tp_Start;
  uint8_T c3_tp_Stop;
  uint8_T c3_tp_Run;
  uint8_T c3_is_active_c3_MotorControl;
  uint8_T c3_is_c3_MotorControl;
  real_T c3_StartCount;
  boolean_T c3_dataWrittenToVector[2];
  uint8_T c3_doSetSimStateSideEffects;
  const mxArray *c3_setSimStateSideEffectsInfo;
  void *c3_fEmlrtCtx;
  uint8_T *c3_StartMotorReq;
  uint8_T *c3_StopMotorReq;
  c3_Enum_MotorState *c3_MotorState;
} SFc3_MotorControlInstanceStruct;

#endif                                 /*typedef_SFc3_MotorControlInstanceStruct*/

/* Named Constants */

/* Variable Declarations */
extern struct SfDebugInstanceStruct *sfGlobalDebugInstanceStruct;

/* Variable Definitions */

/* Function Declarations */
extern const mxArray *sf_c3_MotorControl_get_eml_resolved_functions_info(void);

/* Function Definitions */
extern void sf_c3_MotorControl_get_check_sum(mxArray *plhs[]);
extern void c3_MotorControl_method_dispatcher(SimStruct *S, int_T method, void
  *data);

#endif
