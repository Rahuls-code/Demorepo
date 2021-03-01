$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality of Tutorialsninja",
  "description": "I should be able to login into the site if the username\r\nand password are correct.\r\nI sould be able to search and validate the products.\r\nI should be able to fill all the required information\r\nto proceed with order confirmation and also validate whether\r\ntransaction was successful or not.\r\nI should be able to log out of the application.",
  "id": "login-functionality-of-tutorialsninja",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Login and purchase product",
  "description": "",
  "id": "login-functionality-of-tutorialsninja;login-and-purchase-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I open tutorials ninja site",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "log in using email \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I set Currency to US dollars",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Phones\u0026PADs category",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "IPhones phones should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I validate the price of the searched IPhone",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I add Iphone from search result to the cart",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "\"\u003cproduct\u003e\" should be added to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I fill information \"\u003cfirstname\u003e\" \"\u003clastname\u003e\" \"\u003caddress\u003e\" \"\u003ccity\u003e\" \"\u003cpost\u003e\" \"\u003ccountry\u003e\" \"\u003cstate\u003e\" to proceed with the order",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I confirm the order",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "message should be displayed \"Your order has been placed!\" to indicate transaction successful",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I logout from the application and \"Account Logout\" should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "login-functionality-of-tutorialsninja;login-and-purchase-product;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "product",
        "firstname",
        "lastname",
        "address",
        "city",
        "post",
        "country",
        "state"
      ],
      "line": 26,
      "id": "login-functionality-of-tutorialsninja;login-and-purchase-product;;1"
    },
    {
      "cells": [
        "rg8017@gmail.com",
        "4242@e",
        "iPhone",
        "Rahul",
        "Ghosh",
        "66 Park Street",
        "Kolkata",
        "712202",
        "India",
        "West Bengal"
      ],
      "line": 27,
      "id": "login-functionality-of-tutorialsninja;login-and-purchase-product;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Login and purchase product",
  "description": "",
  "id": "login-functionality-of-tutorialsninja;login-and-purchase-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I open tutorials ninja site",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "log in using email \"rg8017@gmail.com\" and password \"4242@e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I set Currency to US dollars",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Phones\u0026PADs category",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "IPhones phones should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I validate the price of the searched IPhone",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I add Iphone from search result to the cart",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "\"iPhone\" should be added to cart",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I fill information \"Rahul\" \"Ghosh\" \"66 Park Street\" \"Kolkata\" \"712202\" \"India\" \"West Bengal\" to proceed with the order",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I confirm the order",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "message should be displayed \"Your order has been placed!\" to indicate transaction successful",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I logout from the application and \"Account Logout\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_open_tutorials_ninja_site()"
});
formatter.result({
  "duration": 3877536800,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 85\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-O4SS9S6\u0027, ip: \u0027192.168.0.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002710.0.2\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x0034D383+3134339]\n\tOrdinal0 [0x0023A171+2007409]\n\tOrdinal0 [0x000DAEE8+569064]\n\tOrdinal0 [0x0006139F+70559]\n\tOrdinal0 [0x0005CC63+52323]\n\tOrdinal0 [0x00080DFC+200188]\n\tOrdinal0 [0x00080C1D+199709]\n\tOrdinal0 [0x0007EB0B+191243]\n\tOrdinal0 [0x00062E77+77431]\n\tOrdinal0 [0x00063E3E+81470]\n\tOrdinal0 [0x00063DC9+81353]\n\tOrdinal0 [0x00250CD9+2100441]\n\tGetHandleVerifier [0x004BB75A+1396954]\n\tGetHandleVerifier [0x004BB3D9+1396057]\n\tGetHandleVerifier [0x004C7126+1444518]\n\tGetHandleVerifier [0x004BBCE8+1398376]\n\tOrdinal0 [0x00247F51+2064209]\n\tOrdinal0 [0x002522EB+2106091]\n\tOrdinal0 [0x00252411+2106385]\n\tOrdinal0 [0x002649C4+2181572]\n\tBaseThreadInitThunk [0x74FD6359+25]\n\tRtlGetAppContainerNamedObjectPath [0x77548944+228]\n\tRtlGetAppContainerNamedObjectPath [0x77548914+180]\n\t(No symbol) [0x00000000]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.myorg.app.StepDefinitions.i_open_tutorials_ninja_site(StepDefinitions.java:21)\r\n\tat ✽.Given I open tutorials ninja site(src/test/resources/Feature.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "rg8017@gmail.com",
      "offset": 20
    },
    {
      "val": "4242@e",
      "offset": 52
    }
  ],
  "location": "StepDefinitions.log_in_using_email_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.i_set_Currency_to_US_dollars()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.i_click_on_Phones_PADs_category()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepDefinitions.i_validate_the_price_of_the_searched_IPhone()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.i_add_Iphone_from_search_result_to_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone",
      "offset": 1
    }
  ],
  "location": "StepDefinitions.should_be_added_to_cart(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Rahul",
      "offset": 20
    },
    {
      "val": "Ghosh",
      "offset": 28
    },
    {
      "val": "66 Park Street",
      "offset": 36
    },
    {
      "val": "Kolkata",
      "offset": 53
    },
    {
      "val": "712202",
      "offset": 63
    },
    {
      "val": "India",
      "offset": 72
    },
    {
      "val": "West Bengal",
      "offset": 80
    }
  ],
  "location": "StepDefinitions.i_fill_information_to_proceed_with_the_order(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.i_confirm_the_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your order has been placed!",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.message_should_be_displayed_to_indicate_transaction_successful(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Logout",
      "offset": 35
    }
  ],
  "location": "StepDefinitions.i_logout_from_the_application_and_should_be_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
});