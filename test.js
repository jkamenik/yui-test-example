var assert = YAHOO.util.Assert;

YAHOO.tool.TestRunner.add(new YAHOO.tool.TestCase({
  name: 'Tests for string',
  
  test_true: function(){
    var test = String(true);
    assert.isString(test);
    assert.areEqual('true',test);
  },
  
  test_one: function(){
    var test = String(1);
    assert.isString(test);
    assert.areEqual('1',test);
  },
  
  test_string: function(){
    var test = String('test');
    assert.isString('test');
    assert.areEqual('test',test);
  },
  
  test_array: function(){
    var test = String(['test',1,true]);
    assert.isString(test);
    assert.areEqual('test,1,true',test);
  },
  
  test_object: function(){
    var test = String({'this':'that',1:2});
    assert.isString(test);
    assert.areEqual('',test);
  },
  
  test_object_with_name: function(){
    var test = String({'this':'that',1:2,name:'name'});
    assert.isString(test);
    assert.areEqual('name',test);
  }
}));

YAHOO.tool.TestRunner.add(new YAHOO.tool.TestCase({
  name: 'Tests for int',
  
  test_number: function(){
    var test = Int(1);
    assert.isNumber(test);
    assert.areEqual(1,test);
  },
  
  test_true: function(){
    var test = Int(true);
    assert.isNumber(test);
    assert.areEqual(1,test);
  },
  
  test_false: function(){
    var test = Int(false);
    assert.isNumber(test);
    assert.areEqual(0,test);
  },
  
  test_array: function(){
    var test = Int([]);
    assert.isTypeOf('number',test);
    assert.isNaN(test);
  },
  
  test_object: function(){
    var test = Int({});
    assert.isTypeOf('number',test);
    assert.isNaN(test);
  },
  
  test_string_b: function(){
    var test = Int('b');
    assert.isTypeOf('number',test);
    assert.isNaN(test);
  },
  
  test_string_1: function(){
    var test = Int('1');
    assert.isNumber(test);
    assert.areEqual(1,test);
  },
  
  test_string_09: function(){
    var test = Int('09');
    assert.isNumber(test);
    assert.areEqual(9,test);
  }
}));

YAHOO.tool.TestRunner.add(new YAHOO.tool.TestCase({
  name: 'Tests for array',
  
  same_items: function(expected,actual){
    assert.areEqual(expected.length,actual.length);
    assert.isArray(actual);
    
    for(var i = 0; i < expected.length; ++i){
      assert.areEqual(expected[i],actual[i]);
    }
  },
  
  test_true: function(){
    var test = Array(true);
    this.same_items([true],test);
  },
  
  test_array: function(){
    var test = Array([true,1,'test']);
    this.same_items([true,1,'test'],test);
  },
  
  test_number: function(){
    var test = Array(1);
    this.same_items([1],test);
  },
  
  test_object: function(){
    var test = Array({test: 1});
    assert.isArray(test);
    assert.areEqual(1,test[0]['test']);
  }
}));