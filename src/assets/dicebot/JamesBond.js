/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy;

  Opal.add_stubs(['$==', '$floor', '$/', '$+', '$>=', '$<=', '$*']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'JamesBond');

    var $nesting = [self].concat($parent_nesting), $JamesBond_check_1D100$1;

    
    Opal.const_set($nesting[0], 'ID', "JamesBond");
    Opal.const_set($nesting[0], 'NAME', "ジェームズ・ボンド007");
    Opal.const_set($nesting[0], 'SORT_KEY', "しええむすほんと007");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "・1D100の目標値判定で、効果レーティングを1～4で自動判定。\n" + "　例）1D100<=50\n" + "　　　JamesBond : (1D100<=50) → 20 → 効果3（良）\n");
    return (Opal.def(self, '$check_1D100', $JamesBond_check_1D100$1 = function $$check_1D100(total, _dice_total, cmp_op, target) {
      var self = this, base = nil;

      
      if (target['$==']("?")) {
        return ""};
      if (cmp_op['$==']("<=")) {
      } else {
        return ""
      };
      base = $rb_divide($rb_plus(target, 9), 10).$floor();
      if ($truthy($rb_ge(total, 100))) {
        return " ＞ 失敗"
      } else if ($truthy($rb_le(total, base))) {
        return " ＞ 効果1（完璧）"
      } else if ($truthy($rb_le(total, $rb_times(base, 2)))) {
        return " ＞ 効果2（かなり良い）"
      } else if ($truthy($rb_le(total, $rb_times(base, 5)))) {
        return " ＞ 効果3（良）"
      } else if ($truthy($rb_le(total, target))) {
        return " ＞ 効果4（まあまあ）"
      } else {
        return " ＞ 失敗"
      };
    }, $JamesBond_check_1D100$1.$$arity = 4), nil) && 'check_1D100';
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
})(Opal);
