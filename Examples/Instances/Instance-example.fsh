// @Name: Instance Example
// @Description: An example of an instance of a Patient resource

Instance: PatientExample
InstanceOf: Patient
Description: "Example of Patient"
* name.family = "Anyperson"
* name.given[0] = "John"
* name.given[1] = "B."

* contact.telecom[0].system = #phone
* contact.telecom[0].value = "555-555-5555"
* contact.telecom[0].use = #home
* contact.telecom[1].system = #email
* contact.telecom[1].value = "john.anyperson@example.com"

* gender = #male

* birthDate = "1951-01-20"

* address.line = "123 Main St"
* address.city = "Anytown"
* address.postalCode = "12345"
* address.country = "US"

* communication.language = urn:ietf:bcp:47#en-US "English (Region=United States)"
* communication.language.text = "English"