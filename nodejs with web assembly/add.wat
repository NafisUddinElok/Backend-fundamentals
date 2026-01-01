(module
  ;; add নামের একটা function export করছি
  (func $add (param $a i32) (param $b i32) (result i32)
    local.get $a
    local.get $b
    i32.add
  )

  ;; JS থেকে যেন কল করা যায়
  (export "add" (func $add))
)
