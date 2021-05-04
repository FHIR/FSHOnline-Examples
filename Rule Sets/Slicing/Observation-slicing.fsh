// Examples of slicing relevant to Observations

// Slice the component element on the component.code element
RuleSet: ObservationComponentSlicingRules
* component ^slicing.discriminator.type = #pattern
* component ^slicing.discriminator.path = "code"
* component ^slicing.rules = #open
* component ^slicing.description = "Slice based on the component.code pattern"

// Slice the hasMember element on the code element of the referenced resource
RuleSet: ObservationHasMemberSliceOnCode
* hasMember ^slicing.discriminator.type = #pattern 
* hasMember ^slicing.discriminator.path = "$this.resolve().code"
* hasMember ^slicing.rules = #open
* hasMember ^slicing.description = "Slice based on referenced resource's code attribute."

// Slice hasMember element on the profile of the referenced resource
RuleSet: ObservationHasMemberSliceOnProfile
* hasMember ^slicing.discriminator.type = #profile  
* hasMember ^slicing.discriminator.path = "$this.resolve()" 
* hasMember ^slicing.rules = #open
* hasMember ^slicing.description = "Slice based on the referenced resource's profile conformance."

