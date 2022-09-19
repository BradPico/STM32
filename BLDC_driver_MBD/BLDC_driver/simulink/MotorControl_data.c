/*
 * File: MotorControl_data.c
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

/* Constant parameters (auto storage) */
const ConstP_MotorControl_T MotorControl_ConstP = {
  /* Computed Parameter: turn_tableData
   * Referenced by: '<S8>/turn'
   */
  { 0U, 0U, 0U, 1U, 1U, 0U },

  /* Pooled Parameter (Expression: [1 2 3 4 5 6])
   * Referenced by:
   *   '<S8>/turn'
   *   '<S8>/turn1'
   *   '<S8>/turn2'
   *   '<S8>/turn3'
   *   '<S8>/turn4'
   *   '<S8>/turn5'
   */
  { 1U, 2U, 3U, 4U, 5U, 6U },

  /* Computed Parameter: turn1_tableData
   * Referenced by: '<S8>/turn1'
   */
  { 0U, 1U, 1U, 0U, 0U, 0U },

  /* Computed Parameter: turn2_tableData
   * Referenced by: '<S8>/turn2'
   */
  { 0U, 1U, 0U, 0U, 0U, 1U },

  /* Computed Parameter: turn3_tableData
   * Referenced by: '<S8>/turn3'
   */
  { 1U, 0U, 0U, 0U, 1U, 0U },

  /* Computed Parameter: turn4_tableData
   * Referenced by: '<S8>/turn4'
   */
  { 1U, 0U, 1U, 0U, 0U, 0U },

  /* Computed Parameter: turn5_tableData
   * Referenced by: '<S8>/turn5'
   */
  { 0U, 0U, 0U, 1U, 0U, 1U },

  /* Computed Parameter: turn_tableData_e
   * Referenced by: '<S4>/turn'
   */
  { 0U, 0U, 0U, 0U, 1U, 1U, 0U },

  /* Pooled Parameter (Expression: [0 1 2 3 4 5 6])
   * Referenced by:
   *   '<S4>/turn'
   *   '<S4>/turn1'
   *   '<S4>/turn2'
   *   '<S4>/turn3'
   *   '<S4>/turn4'
   *   '<S4>/turn5'
   */
  { 0U, 1U, 2U, 3U, 4U, 5U, 6U },

  /* Computed Parameter: turn1_tableData_p
   * Referenced by: '<S4>/turn1'
   */
  { 0U, 0U, 1U, 1U, 0U, 0U, 0U },

  /* Computed Parameter: turn2_tableData_e
   * Referenced by: '<S4>/turn2'
   */
  { 0U, 0U, 1U, 0U, 0U, 0U, 1U },

  /* Computed Parameter: turn3_tableData_g
   * Referenced by: '<S4>/turn3'
   */
  { 0U, 1U, 0U, 0U, 0U, 1U, 0U },

  /* Computed Parameter: turn4_tableData_j
   * Referenced by: '<S4>/turn4'
   */
  { 0U, 1U, 0U, 1U, 0U, 0U, 0U },

  /* Computed Parameter: turn5_tableData_l
   * Referenced by: '<S4>/turn5'
   */
  { 0U, 0U, 0U, 0U, 1U, 0U, 1U }
};

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
