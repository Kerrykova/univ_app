module ApplicationHelper

    def session_link
        if (logged_in?)
        link_to("Sign Out", logout_path, method: :delete)
    else 
        link_to("Sign In", login_path)
        link_to("Sign Up", new_student_path)

    end
    end

end
