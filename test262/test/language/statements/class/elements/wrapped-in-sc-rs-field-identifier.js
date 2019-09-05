// This file was procedurally generated from the following sources:
// - src/class-elements/rs-field-identifier.case
// - src/class-elements/productions/cls-decl-wrapped-in-sc.template
/*---
description: Valid FieldDefinition (fields definition wrapped in semicolons)
esid: prod-FieldDefinition
features: [class-fields-public, class]
flags: [generated]
info: |
    ClassElement :
      ...
      FieldDefinition ;
      ;

    FieldDefinition :
      ClassElementName Initializer _opt

    ClassElementName :
      PropertyName

    PropertyName :
      LiteralPropertyName
      ComputedPropertyName

    LiteralPropertyName :
      IdentifierName

    IdentifierName ::
      IdentifierStart
      IdentifierName IdentifierPart

    IdentifierStart ::
      UnicodeIDStart
      $
      _
      \ UnicodeEscapeSequence

    IdentifierPart::
      UnicodeIDContinue
      $
      \ UnicodeEscapeSequence
      <ZWNJ> <ZWJ>

    UnicodeIDStart::
      any Unicode code point with the Unicode property "ID_Start"

    UnicodeIDContinue::
      any Unicode code point with the Unicode property "ID_Continue"


    NOTE 3
    The sets of code points with Unicode properties "ID_Start" and
    "ID_Continue" include, respectively, the code points with Unicode
    properties "Other_ID_Start" and "Other_ID_Continue".

---*/


class C {
  ;;;;
  ;;;;;;$; _; \u{6F}; \u2118; ZW_\u200C_NJ; ZW_\u200D_J;;;;;;;
  ;;;;
  
}

var c = new C();

c.$ = 1;
c._ = 1;
c.\u{6F} = 1;
c.\u2118 = 1;
c.ZW_\u200C_NJ = 1;
c.ZW_\u200D_J = 1;

assert.sameValue(c.$, 1);
assert.sameValue(c._, 1);
assert.sameValue(c.\u{6F}, 1);
assert.sameValue(c.\u2118, 1);
assert.sameValue(c.ZW_\u200C_NJ, 1);
assert.sameValue(c.ZW_\u200D_J, 1);
