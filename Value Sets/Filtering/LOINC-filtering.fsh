// Value set example filtering on LOINC Part (LP) codes
Alias:  LNC = http://loinc.org

ValueSet: TumorMarkerTestVS
Id: tumor-marker-test-vs
Title: "Tumor Marker Test Value Set"
Description:  "Codes representing tests for tumor markers."
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
// LOINC Part (LP) codes are found in https://loinc.org/download/loinc-part-file/
* include codes from system LNC where ancestor = "LP101591-8"
* include codes from system LNC where ancestor = "LP111251-7"
* include codes from system LNC where ancestor = "LP136073-6"
* include codes from system LNC where ancestor = "LP14040-7"
* include codes from system LNC where ancestor = "LP14329-4"