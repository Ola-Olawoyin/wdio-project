Feature: Search WDIO

    Feature Description
    @demo
    Scenario Outline: Search Funtion
        Given I navigate to Google webpage
        When I Search with <SearchItem>
        Then I click the first search result
        Then URL should match <ExpectedURL>

        Examples:
            | TestID | SearchItem | ExpectedURL           |
            | TC001  | WDIO       | https://webdriver.io/ |
