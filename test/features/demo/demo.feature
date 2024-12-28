Feature: Demo Feature

    @demo
    Scenario Outline: Run first demo feature
        Given Google page is opened
        When Searched with a <SearchItem>
        Then Click the first search result
        Then URL should match <ExpectedURL>


        Examples:
            | TestID     | SearchItem | ExpectedURL          |
            | DEMO_TC001 | WDIO       | https://webdriver.io |