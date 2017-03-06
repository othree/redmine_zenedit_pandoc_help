require 'redmine'
require 'redmine_zenedit_pandoc_help'
require 'redmine_zenedit_pandoc_help/hooks/view_layouts_base_html_head'

Redmine::Plugin.register :redmine_zenedit_pandoc_help do
  name 'Redmine Zen Edit Pandoc Help'
  author 'othree'
  version '1.0'
  author_url 'othree@gmail.com'
end
