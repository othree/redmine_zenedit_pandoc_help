module RedmineZeneditPandocHelp
  class StylesheetHook < Redmine::Hook::ViewListener
    def view_layouts_base_html_head(context)
      javascript_include_tag(:zenedit_pandoc_help, :plugin => 'redmine_zenedit_pandoc_help') +
      stylesheet_link_tag(:zenedit_pandoc_help, :plugin => 'redmine_zenedit_pandoc_help')
    end
  end
end
