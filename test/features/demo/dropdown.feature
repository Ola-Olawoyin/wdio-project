Feature: Web Interaction - Dropdown

    @demo
    Scenario Outline: Run first demo feature
        Given A Web page is opened that contains dropdown
        When A user interacts with the dropdown
        Then User is able to select an value

        Examples:
            | TestID    |
            | WEB_TC002 |