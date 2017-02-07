class ApplicationController < ActionController::Base
  include ReactOnRails::Controller
  protect_from_forgery with: :exception

  def home
    render_for_react()
  end

  private

  # ref: http://r7kamura.hatenablog.com/entry/2016/10/10/173610
  def common_props
    {
      currentUser: current_user,
    }
  end

  def render_for_react(props: {}, status: 200)
    if request.format.json?
      response.headers["Cache-Control"] = "no-cache, no-store"
      response.headers["Expires"] = "Fri, 01 Jan 1990 00:00:00 GMT"
      response.headers["Pragma"] = "no-cache"
      render(
        json: common_props.merge(props),
        status: status,
      )
    else
      redux_store(
        "store",
        props: common_props.merge(props).as_json,
      )

      render(
        html: view_context.react_component(
          "Router",
          prerender: true,
        ),
        layout: true,
        status: status,
      )
    end
  end
end
