#pragma once
#include "animator.h"
#include "bgfx/bgfx.h"
#include "nanovg_wrapper.h"
#include <memory>
#include <vector>

namespace ui {

struct widget;
struct UpdateContext {
  float delta_t;
  double mouse_x, mouse_y;
  bool mouse_down;
  // only true for one frame
  bool mouse_clicked;
  bool mouse_up;

  bool hovered(widget *w) const;
  bool mouse_clicked_on(widget *w) const { return mouse_clicked && hovered(w); }
  bool mouse_down_on(widget *w) const { return mouse_down && hovered(w); }
};

struct widget {
  std::vector<sp_anim_float> anim_floats{};
  sp_anim_float anim_float(auto &&...args) {
    auto anim = std::make_shared<animated_float>(std::forward<decltype(args)>(args)...);
    anim_floats.push_back(anim);
    return anim;
  }

  sp_anim_float x = anim_float(), y = anim_float(), width = anim_float(),
                height = anim_float();
  virtual void render(bgfx::ViewId view, nanovg_context ctx) {}
  virtual void update(const UpdateContext &ctx);
  virtual ~widget() = default;
};

struct widget_parent : public widget {
  std::vector<std::unique_ptr<widget>> children;
  void render(bgfx::ViewId view, nanovg_context ctx) override;
  void update(const UpdateContext &ctx) override;
  void add_child(std::unique_ptr<widget> child);
  template <typename T, typename... Args>
  inline void emplace_child(Args &&...args) {
    children.emplace_back(std::make_unique<T>(std::forward<Args>(args)...));
  }
};
} // namespace ui